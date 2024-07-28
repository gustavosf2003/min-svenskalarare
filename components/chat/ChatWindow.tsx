"use client";

import "react-toastify/dist/ReactToastify.css";

import { useRef, ReactElement } from "react";
import type { FormEvent } from "react";

import { PaperPlaneRight } from "@phosphor-icons/react";
import { useChat } from "ai/react";
import clsx from "clsx";
import { toast } from "react-toastify";

import { ChatMessageBubble } from "./ChatMessageBubble";

type ChatWindowProps = {
  endpoint: string;
  emptyStateComponent: ReactElement;
  placeholder: string;
  titleText: string;
};

export function ChatWindow({
  endpoint,
  emptyStateComponent,
  placeholder,
  titleText,
}: ChatWindowProps) {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading: chatEndpointIsLoading,
  } = useChat({
    api: endpoint,
    body: {
      input: "",
    },
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
    if (chatEndpointIsLoading) {
      return;
    }
    handleSubmit(e);
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
    const lineCount = getLineCount(input, 50);
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
        "flex flex-col items-center -mb-8 h-full rounded py-4",
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
        className="flex justify-start flex-col-reverse items-start w-full max-h-[700px] overflow-y-scroll pl-4 pr-1.5"
        ref={messageContainerRef}
      >
        {messages.length > 0
          ? [...messages]
              .reverse()
              .map((m) =>
                m.role === "system" ? (
                  <></>
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
              changeInputHeight();
            }}
          />

          <button
            className={clsx(
              "hover:bg-[#3C4043] p-2 rounded-full absolute right-2 top-2 h-8 w-8",
              input.trim().length > 0
                ? "transition-all ease-in-out duration-900 opacity-100"
                : "transition-all ease-in-out duration-900 opacity-0",
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
