import { TranslationType } from "@/types/translation";
import axios from "axios";

async function translate(
  word: string,
  sourceLocale: string,
  targetLanguage: string,
): Promise<TranslationType> {
  try {
    const result = await axios.get(
      "https://min-svenska-larare-server.onrender.com/",
      {
        params: {
          text: word,
          sourceLang: sourceLocale,
          targetLang: targetLanguage,
        },
      },
    );
    return result.data as TranslationType;
  } catch (error) {
    console.log(error);
    throw new Error("Translation Error");
  }
}

const translatorService = { translate };

export default translatorService;
