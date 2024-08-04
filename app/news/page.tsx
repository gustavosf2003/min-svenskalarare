"use client";
import Navbar from "@/components/Navbar";
import newsService from "@/services/news";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full h-full">
      <Navbar />
      <div className="justify-center flex-1 w-full h-full min-h-full gap-8 pt-20 pb-8 mt-3 md:flex bg-basePrimary px-7">
        <NewsContent />
      </div>
    </div>
  );
};

export default News;

const NewsContent = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["news"],
    queryFn: async () => await newsService.getFromSVT(),
    initialData: [],
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }
  return (
    <div>
      <h1>News - Work in Progress</h1>
      <div className="flex flex-col gap-4">
        <p>SVT Nyheter:</p>
        {data &&
          data
            .filter((article) => !article.image.startsWith("data:"))
            .map((article) => (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start w-full gap-2 p-4 transition-all duration-300 rounded-lg bg-baseSecondary hover:bg-baseSecondary/50"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-48 h-28"
                />
                <div>
                  <p>{article.title}</p>
                  <p className="-mt-2 text-sm text-gray-400">
                    {article.description}
                  </p>
                </div>
              </a>
            ))}
      </div>
    </div>
  );
};
