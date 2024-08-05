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
async function getFromDagensNyheter(): Promise<any> {
  let response = await axios.get(
    `https://min-svenska-larare-server.vercel.app/articles/dagensNyheter`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}
async function getFromAftonbladet(): Promise<any> {
  let response = await axios.get(
    `https://min-svenska-larare-server.vercel.app/articles/aftonbladet`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}
async function getFromSVD(): Promise<any> {
  let response = await axios.get(
    `https://min-svenska-larare-server.vercel.app/articles/svd`,
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}

const newsService = {
  getFromSVT,
  getFromDagensNyheter,
  getFromAftonbladet,
  getFromSVD,
};

export default newsService;
