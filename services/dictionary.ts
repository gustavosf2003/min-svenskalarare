import axios from "axios";

async function getWord() {
  const response = await axios.get(
    "https://ws.spraakbanken.gu.se/ws/karp/v4/query?q=simple||skickat",
  );
  console.log(response.data);
  return response.data;
}

const dictionaryService = { getWord };

export default dictionaryService;
