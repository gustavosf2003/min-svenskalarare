"use client";
import Navbar from "@/components/Navbar";
import newsService from "@/services/news";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Article } from "@/types/article";
import SkeletonLoading from "@/components/Skeleton";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";

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
    enabled: false,
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
          <NewsCard
            data={svtData}
            isLoading={svtLoading}
            image={
              <Link href="https://www.svt.se/" target="_blank">
                <Image src="/images/svt.svg" alt="SVT" width={40} height={40} />
              </Link>
            }
            isError={svtError}
          />
          <NewsCard
            data={dnData}
            image={
              <Link href="https://www.dn.se/" target="_blank">
                <Image
                  src="/images/dn.png"
                  alt="Dagens Nyheter"
                  width={40}
                  height={40}
                />
              </Link>
            }
            isLoading={dnLoading}
            isError={dnError}
          />
          <NewsCard
            image={
              <Link href="https://www.aftonbladet.se/" target="_blank">
                <Image
                  src="/images/svd.png"
                  alt="Svenska Dagbladet"
                  width={40}
                  height={40}
                />
              </Link>
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
