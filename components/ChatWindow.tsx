"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useChat } from "ai/react";
import { useRef, useState, useEffect, ReactElement } from "react";
import type { FormEvent } from "react";
import type { AgentStep } from "langchain/schema";

import { ChatMessageBubble } from "@/components/ChatMessageBubble";
import { IntermediateStep } from "./IntermediateStep";
import Link from "next/link";
import { Button } from "./Button";
import clsx from "clsx";
import { PaperPlaneRight } from "@phosphor-icons/react";

export function ChatWindow(props: {
  endpoint: string;
  emptyStateComponent: ReactElement;
  placeholder?: string;
  titleText?: string;
  emoji?: string;
  showIngestForm?: boolean;
  showIntermediateStepsToggle?: boolean;
}) {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    endpoint,
    emptyStateComponent,
    placeholder,
    titleText = "An LLM",
    showIngestForm,
    showIntermediateStepsToggle,
    emoji,
  } = props;

  const [showIntermediateSteps, setShowIntermediateSteps] = useState(false);
  const [intermediateStepsLoading, setIntermediateStepsLoading] =
    useState(false);

  const intemediateStepsToggle = showIntermediateStepsToggle && (
    <div>
      <input
        type="checkbox"
        id="show_intermediate_steps"
        name="show_intermediate_steps"
        checked={showIntermediateSteps}
        onChange={(e) => setShowIntermediateSteps(e.target.checked)}
      ></input>
      <label htmlFor="show_intermediate_steps"> Show intermediate steps</label>
    </div>
  );

  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading: chatEndpointIsLoading,
    setMessages,
  } = useChat({
    api: endpoint,
    onError: (e) => {
      toast(e.message, {
        theme: "dark",
      });
    },
  });

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (messageContainerRef.current) {
      messageContainerRef.current.classList.add("grow");
    }
    if (!messages.length) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    if (chatEndpointIsLoading ?? intermediateStepsLoading) {
      return;
    }
    if (!showIntermediateSteps) {
      handleSubmit(e);
      // Some extra work to show intermediate steps properly
    } else {
      setIntermediateStepsLoading(true);
      setInput("");
      const messagesWithUserReply = messages.concat({
        id: messages.length.toString(),
        content: input,
        role: "user",
      });
      setMessages(messagesWithUserReply);
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
          messages: messagesWithUserReply,
          show_intermediate_steps: true,
        }),
      });
      const json = await response.json();
      setIntermediateStepsLoading(false);
      if (response.status === 200) {
        // Represent intermediate steps as system messages for display purposes
        const intermediateStepMessages = (json.intermediate_steps ?? []).map(
          (intermediateStep: AgentStep, i: number) => {
            return {
              id: (messagesWithUserReply.length + i).toString(),
              content: JSON.stringify(intermediateStep),
              role: "system",
            };
          },
        );
        const newMessages = messagesWithUserReply;
        for (const message of intermediateStepMessages) {
          newMessages.push(message);
          setMessages([...newMessages]);
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 + Math.random() * 1000),
          );
        }
        setMessages([
          ...newMessages,
          {
            id: (
              newMessages.length + intermediateStepMessages.length
            ).toString(),
            content: json.output,
            role: "assistant",
          },
        ]);
      } else {
        if (json.error) {
          toast(json.error, {
            theme: "dark",
          });
          throw new Error(json.error);
        }
      }
    }
  }

  const getLineCount = (text, cols) => {
    const lines = text.split("\n");
    let lineCount = lines.length;

    lines.forEach((line) => {
      lineCount += Math.floor(line.length / cols);
    });

    return lineCount;
  };
  const changeInputHeight = () => {
    const lineCount = getLineCount(input, 50); // assuming 50 characters per line for calculation
    if (lineCount < 4) {
      return "h-12 rounded-full";
    }
    if (lineCount < 8) {
      return "h-20 rounded-xl";
    }
    if (lineCount < 12) {
      return "h-24 rounded-2xl";
    }
    if (lineCount < 16) {
      return "h-32 rounded-2xl";
    }
    return "h-40 rounded-xl";
  };
  return (
    <div
      className={clsx(
        "flex flex-col  items-center -mb-8 h-full rounded py-4",
        messages.length === 0 && "justify-between",
      )}
    >
      {messages.length === 0 ? (
        emptyStateComponent
      ) : (
        <h2 className={`${messages.length > 0 ? "" : "hidden"} text-2xl`}>
          🇸🇪 {titleText} 🇸🇪
        </h2>
      )}

      <div
        className="flex  justify-start flex-col-reverse items-start w-full  max-h-[700px]  overflow-y-scroll pl-4 pr-1.5"
        ref={messageContainerRef}
      >
        {messages.length > 0
          ? [...messages]
              .reverse()
              .map((m) =>
                m.role === "system" ? (
                  <IntermediateStep key={m.id} message={m}></IntermediateStep>
                ) : (
                  <ChatMessageBubble key={m.id} message={m} />
                ),
              )
          : ""}
      </div>

      <form
        ref={formRef}
        onSubmit={sendMessage}
        className="flex flex-col w-full px-4"
      >
        <div className="flex">{intemediateStepsToggle}</div>
        <div className="w-full mt-4 relative">
          <textarea
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.shiftKey == false) {
                e.preventDefault();
                formRef.current?.requestSubmit();
              }
            }}
            className={clsx(
              "w-full pl-6 pr-12 text-white py-3 focus:outline-none bg-[#2F2F2F] resize-none",
              changeInputHeight(),
            )}
            value={input}
            placeholder={placeholder}
            onChange={(e) => {
              handleInputChange(e);
              changeInputHeight(); // call to adjust height
            }}
          />

          <button
            className={clsx(
              "hover:bg-[#3C4043] p-2 rounded-full absolute right-2  h-full",
              input.trim().length > 0
                ? "transition-all ease-in-out  duration-900 opacity-100"
                : "transition-all ease-in-out  duration-900 opacity-0",
            )}
            type="submit"
          >
            <PaperPlaneRight />
          </button>
        </div>
      </form>
    </div>
  );
}
