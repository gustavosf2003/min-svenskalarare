import { useEffect } from "react";

import { Copy } from "@phosphor-icons/react";

import { useToast } from "@/context/toast";

import SpeechComponent from "./SpeechComponent";

const ReadOptions = ({ text }: { text: string }) => {
  const { showToast } = useToast();
  useEffect(() => {
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = (e: any) => {
    e.preventDefault();
    try {
      const clipboardData = e.clipboardData;
      const toCopyText = text.replace(/<[^>]*>/g, "");
      showToast("success", "Text kopierad till urklipp");
      clipboardData.setData("text/plain", toCopyText);
    } catch (error) {
      showToast("error", "Något gick fel. Det gick inte att kopiera texten");
    }
  };

  const exportData = () => {
    document.execCommand("copy");
  };

  return (
    <div className="absolute flex items-center right-1 -top-8">
      <button
        className="flex items-center justify-center p-2 rounded-md hover:bg-[#2F2F2F] hover:bg-opacity-40"
        onClick={exportData}
      >
        <Copy size={16} />
      </button>
      <SpeechComponent text={text} />
    </div>
  );
};

export default ReadOptions;
