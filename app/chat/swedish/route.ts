import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { BytesOutputParser } from "langchain/schema/output_parser";
import {
  FewShotPromptTemplate,
  LengthBasedExampleSelector,
  PromptTemplate,
} from "langchain/prompts";
import { SwedishQuestions } from "./questions";
import { SwedishPrompt } from "./prompt";
import { BufferMemory } from "langchain/memory";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];

    if (messages.length === 0) {
      throw new Error("No messages found in the request body.");
    }
    const memory = new BufferMemory({ memoryKey: "history" });

    const formattedMessages = messages.map(formatMessage).join("\n");
    const currentMessageContent = messages[messages.length - 1]?.content ?? "";
    const examplePrompt = new PromptTemplate({
      inputVariables: ["input", "output"],
      template: "Input: {input}\nOutput: {output}",
    });

    const exampleSelector = await LengthBasedExampleSelector.fromExamples(
      SwedishQuestions,
      {
        examplePrompt,
        maxLength: 2000,
      },
    );

    const dynamicPrompt = new FewShotPromptTemplate({
      exampleSelector,
      examplePrompt,
      prefix: `${SwedishPrompt}\n`,
      suffix: `Chat_history: ${formattedMessages} \n Input: {adjective}\nOutput:`,
      inputVariables: ["adjective"],
    });

    const model = new ChatOpenAI({
      openAIApiKey: process.env.API_KEY,
      modelName: "gpt-4o-mini",
      temperature: 0.5,
      topP: 0.5,
      frequencyPenalty: 0,
      presencePenalty: 0,
    });
    const outputParser = new BytesOutputParser();

    const chain = dynamicPrompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      memory,
      input: currentMessageContent,
      adjective: currentMessageContent,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
