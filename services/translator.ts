import { WordRequestType } from "@/types/dictionary";
import axios from "axios";

//   do it this in axios here:
//   curl -X POST 'https://api.deepl.com/v2/translate' \
// --header 'Authorization: DeepL-Auth-Key [yourAuthKey]' \
// --header 'Content-Type: application/json' \
// --data '{
//   "text": [
//     "Hello, world!"
//   ],
//   "target_lang": "DE"
// }'
async function translate(word: string, targetLanguage: string): Promise<any> {
  let response = await axios.post(
    `https://api.deepl.com/v2/translate`,
    {
      text: word,
      target_lang: targetLanguage,
    },
    {
      headers: {
        Authorization: `DeepL-Auth-Key ${process.env.REACT_APP_DEEPL_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
}

const translatorService = { translate };

export default translatorService;
