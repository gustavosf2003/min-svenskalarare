"use client";
import Link from "next/link";

import { ChatWindow } from "@/components/chat/ChatWindow";
import InfoCard from "@/components/chat/InfoCard";
import Dictionary from "@/components/dictionary";
import Navbar from "@/components/Navbar";
import TranslatorComponent from "@/components/translator";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex-1 flex flex-col relative">
        <Navbar />
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full pt-20 pb-8 px-7 mt-3">
          <div className="w-full md:w-1/2 rounded-xl border border-borderPrimary md:min-h-full h-[600px] md:h-auto mb-8 md:mb-0 overflow-y-scroll">
            <ChatWindow
              endpoint="chat/swedish"
              titleText="Min svenskalärare"
              placeholder="Skriv här..."
              emptyStateComponent={<InfoCard />}
            />
          </div>
          <div className="flex md:w-1/2 flex-col gap-8">
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
          className="hidden md:block bottom-0 right-8 absolute text-sm text-white underline cursor-pointer opacity-60"
        >
          Made by Gustavo Ferreira ©
        </Link>
      </div>
    </>
  );
}
