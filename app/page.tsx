"use client";

import Link from "next/link";

import { ChatWindow } from "@/components/chat/ChatWindow";
import InfoCard from "@/components/chat/InfoCard";
import Dictionary from "@/components/dictionary";
import Navbar from "@/components/Navbar";
import TranslatorComponent from "@/components/translator";
import { queryClient } from "./providers";
import { useEffect } from "react";
import newsService from "@/services/news";

export default function Home() {
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["svt-news"],
      queryFn: async () => await newsService.getFromSVT(),
      initialData: [],
    });
    queryClient.prefetchQuery({
      queryKey: ["dagens-nyheter-news"],
      queryFn: async () => await newsService.getFromDagensNyheter(),
      initialData: [],
    });
    queryClient.prefetchQuery({
      queryKey: ["svd-news"],
      queryFn: async () => await newsService.getFromSVD(),
      initialData: [],
    });
  }, []);

  return (
    <>
      <div className="relative flex flex-col flex-1 w-full h-full">
        <Navbar />
        <div className="flex-1 w-full h-full min-h-full gap-8 pt-20 pb-8 mt-3 md:flex bg-basePrimary px-7">
          <div className="w-full md:w-1/2 rounded-xl border border-borderPrimary md:min-h-full h-[600px] md:h-auto mb-8 md:mb-0 overflow-y-scroll">
            <ChatWindow
              endpoint="chat/swedish"
              titleText="Min svenskalärare"
              placeholder="Skriv här..."
              emptyStateComponent={<InfoCard />}
            />
          </div>
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="h-[55%] rounded-xl border border-borderPrimary">
              <Dictionary />
            </div>
            <div className="h-[45%] rounded-xl border border-borderPrimary p-4 mb-8 md:mb-0">
              <TranslatorComponent />
            </div>
          </div>
        </div>
        <Link
          href="https://www.buymeacoffee.com/gustavoferreira"
          className="absolute bottom-0 hidden text-sm underline cursor-pointer md:block right-8 opacity-60"
        >
          Made by Gustavo Ferreira ©
        </Link>
      </div>
    </>
  );
}
