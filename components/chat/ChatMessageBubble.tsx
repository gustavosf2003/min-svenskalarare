import type { Message } from "ai/react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessageBubbleProps = {
  message: Message;
};

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  return (
    <div
      className={clsx(
        `rounded px-4 py-2   mb-8 flex`,
        message.role === "user"
          ? "bg-[#2F2F2F] ml-auto"
          : "bg-[#3E3D3B]/20 mr-auto",
        message.content.length > 100 ? "rounded-xl" : "rounded-full",
      )}
    >
      <ReactMarkdown
        className="whitespace-pre-wrap"
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ ...props }) => <p className="leading-none" {...props} />,
          ol: ({ ...props }) => (
            <ol className="mb-1 list-disc ml-3" {...props} />
          ),
          li: ({ ...props }) => <li className="-my-3" {...props} />,
          th: ({ ...props }) => (
            <th className="bg-gray-300 border text- py-0.5 px-2" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-3 py-1 text-sm font-medium border" {...props} />
          ),
          table: ({ ...props }) => <table className="table-fixed" {...props} />,
        }}
      >
        {message.content}
      </ReactMarkdown>
    </div>
  );
}
