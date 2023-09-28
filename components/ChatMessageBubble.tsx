import type { Message } from "ai/react";
import { Suspense } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
}) {
  const colorClassName =
    props.message.role === "user" ? "bg-sky-700" : "bg-slate-50 text-black";
  const alignmentClassName = props.message.role === "user" ? "ml-auto" : "";
  const prefix = props.message.role === "user" ? "👱‍♂️" : props.aiEmoji;
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} rounded px-4 py-2 mr-2  mb-8 flex `}
    >
      <div className="mr-2 mt-1.5">{prefix}</div>

      <ReactMarkdown
        className="whitespace-pre-wrap"
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ node, ...props }) => <p className="leading-none" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="mb-1 list-disc" {...props} />
          ),
          li: ({ node, ...props }) => <li className="-my-3" {...props} />,
          th: ({ node, ...props }) => (
            <th className="bg-gray-300 border text-  py-0.5  px-2" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-3 py-1 text-sm font-medium border" {...props} />
          ),
          table: ({ node, ...props }) => (
            <table className="table-fixed" {...props} />
          ),
        }}
      >
        {props.message.content}
      </ReactMarkdown>
    </div>
  );
}
