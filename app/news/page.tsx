"use client";
import Navbar from "@/components/Navbar";
import newsService from "@/services/news";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/article";
import SkeletonLoading from "@/components/Skeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useWindowSize } from "@/hooks/useWindowSize";

const News = () => {
  const {
    data: svtData,
    isFetching: svtLoading,
    isError: svtError,
  } = useQuery<Article[]>({
    queryKey: ["svt-news"],
    queryFn: async () => await newsService.getFromSVT(),
    initialData: [],
  });
  const {
    data: dnData,
    isFetching: dnLoading,
    isError: dnError,
  } = useQuery<Article[]>({
    queryKey: ["dagens-nyheter-news"],
    queryFn: async () => await newsService.getFromDagensNyheter(),
    initialData: [],
  });
  const {
    data: abData,
    isFetching: abLoading,
    isError: abError,
  } = useQuery<Article[]>({
    queryKey: ["aftonbladet-news"],
    queryFn: async () => await newsService.getFromAftonbladet(),
    initialData: [],
  });
  const {
    data: svdData,
    isFetching: svdLoading,
    isError: svdError,
  } = useQuery<Article[]>({
    queryKey: ["svd-news"],
    queryFn: async () => await newsService.getFromSVD(),
    initialData: [],
  });

  return (
    <div className="relative flex flex-col flex-1 w-full h-full">
      <Navbar />
      <div className="justify-center flex-1 w-full h-full min-h-full gap-8 pt-20 pb-8 mt-3 md:flex bg-basePrimary px-7">
        <div className="flex flex-col gap-8 lg:flex-row">
          <NewsContent
            data={svtData}
            isLoading={svtLoading}
            image={
              <Image src="/images/svt.svg" alt="SVT" width={40} height={40} />
            }
            isError={svtError}
          />
          <NewsContent
            data={dnData}
            image={
              <Image
                src="/images/dn.png"
                alt="Dagens Nyheter"
                width={40}
                height={40}
              />
            }
            isLoading={dnLoading}
            isError={dnError}
          />
          <NewsContent
            image={
              <Image
                src="/images/svd.png"
                alt="Svenska Dagbladet"
                width={40}
                height={40}
              />
            }
            data={svdData}
            isLoading={svdLoading}
            isError={svdError}
          />
        </div>
      </div>
    </div>
  );
};

export default News;

type NewsContentProps = {
  data: Article[];
  isLoading: boolean;
  isError: boolean;
  image?: React.ReactNode;
  limit?: number;
};

const NewsContent = ({
  data,
  isLoading,
  isError,
  image,
  limit = 5,
}: NewsContentProps) => {
  if (isError) {
    return <p>Något gick fel. Försök igen senare.</p>;
  }
  return (
    <div className="mt-8 lg:mt-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div>{image}</div>
        </div>
        {isLoading && <CustomArticlesSkeletonLoading />}
        {data &&
          data.slice(0, limit).map((article) => (
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

const CustomArticlesSkeletonLoading = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="flex-col hidden gap-4 lg:flex">
        {width && (
          <>
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        {width && (
          <>
            <SkeletonLoading height={140} width={width - 56} />
            <SkeletonLoading height={140} width={width - 56} />
            <SkeletonLoading height={140} width={width - 56} />
            <SkeletonLoading height={140} width={width - 56} />
            <SkeletonLoading height={140} width={width - 56} />
          </>
        )}
      </div>
    </>
  );
};
