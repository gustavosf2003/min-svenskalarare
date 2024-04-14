import { WordRequestType } from "@/types/dictionary";
import axios from "axios";

async function getWord(word: string): Promise<WordRequestType> {
  let response = await axios.get(
    `https://ws.spraakbanken.gu.se/ws/karp/v4/query?q=extended||and|wf|equals|${word}&resource=saldom`,
  );
  response.data.searchedWord = word;

  return response.data;
}

const dictionaryService = { getWord };

export default dictionaryService;
