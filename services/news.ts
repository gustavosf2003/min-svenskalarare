import axios from "axios";

async function getFromSVT(): Promise<any> {
  let response = await axios.get(
    `https://min-svenska-larare-server.vercel.app/articles/svt`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}

const newsService = { getFromSVT };

export default newsService;
