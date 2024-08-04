import { useToast } from "@/context/toast";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = () => {
  const { showToast } = useToast();

  const copyToClipboard = (text: string) => {
    let isCopy = copy(text);
    if (isCopy) {
      showToast("success", "Text kopierad till urklipp");
    } else {
      showToast("error", "Något gick fel. Det gick inte att kopiera texten");
    }
    return isCopy;
  };

  return { copyToClipboard };
};
