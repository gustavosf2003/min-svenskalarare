import { useState } from "react";

import type { Message } from "ai/react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ReadOptions from "../ReadOptions";

type ChatMessageBubbleProps = {
  message: Message;
  isLatestAiMessage: boolean;
  isLoading: boolean;
};

export function ChatMessageBubble({
  message,
  isLatestAiMessage,
  isLoading,
}: ChatMessageBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        if (message.role === "user") return;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (message.role === "user") return;
        setIsHovered(false);
      }}
      className={clsx(
        `rounded px-4 py-2   mb-8 flex relative`,
        message.role === "user"
          ? "bg-[#2F2F2F] ml-auto"
          : "bg-[#3E3D3B]/20 mr-auto mt-2",
        message.content.length > 100 ? "rounded-xl" : "rounded-full",
      )}
    >
      {message.role !== "user" &&
        !isLoading &&
        (isLatestAiMessage || isHovered) && (
          <ReadOptions text={message.content} />
        )}
      <div>
        <ReactMarkdown
          className="whitespace-pre-wrap"
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ ...props }) => <p className="leading-none" {...props} />,
            ol: ({ ...props }) => (
              <ol className="mb-1 ml-3 list-disc" {...props} />
            ),
            li: ({ ...props }) => <li className="-my-3" {...props} />,
            th: ({ ...props }) => (
              <th className="bg-gray-300 border text- py-0.5 px-2" {...props} />
            ),
            td: ({ ...props }) => (
              <td className="px-3 py-1 text-sm font-medium border" {...props} />
            ),
            table: ({ ...props }) => (
              <table className="table-fixed" {...props} />
            ),
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
