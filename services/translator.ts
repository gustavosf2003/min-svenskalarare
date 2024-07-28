import axios from "axios";

async function translate(
  word: string,
  sourceLocale: string,
  targetLanguage: string,
): Promise<string> {
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
    return result.data as string;
  } catch (error) {
    console.log(error);
    throw new Error("Translation Error");
  }
}

const translatorService = { translate };

export default translatorService;
