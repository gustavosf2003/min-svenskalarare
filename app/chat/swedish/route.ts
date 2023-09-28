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

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;

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
      prefix: SwedishPrompt,
      suffix: "Input: {adjective}\nOutput:",
      inputVariables: ["adjective"],
    });

    const model = new ChatOpenAI({
      azureOpenAIApiKey: process.env.API_KEY,
      azureOpenAIApiInstanceName: process.env.API_INSTANCE_NAME,
      azureOpenAIApiDeploymentName: process.env.API_DEPLOYMENT_NAME,
      azureOpenAIApiVersion: process.env.API_VERSION,
      temperature: 0.98,
      topP: 0.95,
      frequencyPenalty: 0,
      presencePenalty: 0,
    });
    const outputParser = new BytesOutputParser();

    const chain = dynamicPrompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
      adjective: currentMessageContent,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
