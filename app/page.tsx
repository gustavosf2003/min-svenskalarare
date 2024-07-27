"use client";
import { ChatWindow } from "@/components/ChatWindow";
import Dictionary from "@/components/dictionary";
import TranslatorComponent from "@/components/translator";
import { ToastProvider } from "@/context/toast";
import Link from "next/link";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full  lg:overflow-hidden overflow-y-auto">
      <a href="https://github.com/gustavosf2003">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">
          🤖 AI Assistent
        </h1>
      </a>
      <ul>
        <li className="text-l">
          👨‍🏫
          <span className="ml-2">
            Welcome to the Min Svenskalärare. I am Linnea, your friendly virtual
            Swedish language assistent!
          </span>
        </li>
        <li className="text-l hidden md:block">
          📝
          <span className="ml-2">
            Create Homework: Linnea can generate custom homework tailored to
            their language proficiency level and subjects
          </span>
        </li>
        <li className="text-l hidden md:block">
          🏋️‍♀️
          <span className="ml-2">
            Generate Exercises: Linnea can generate exercises to help you
            reinforce your Swedish language skills, from vocabulary quizzes to
            verb conjugation drills
          </span>
        </li>
        <li className="text-l hidden md:block">
          📖
          <span className="ml-2">
            Improve your reading skills: Here you can ask to read articles,
            poems and even fairy tales in Swedish. Please note that the
            available articles are up until August 2021.
          </span>
        </li>
        <li className="text-l hidden md:block">
          🌟
          <span className="ml-2">
            Don&apos;t hesitate to ask her anything, whether it&apos;s about
            Swedish traditions, idioms, or any aspect of the language
          </span>
        </li>

        <li className="text-l ">
          👇
          <span className="ml-2">
            Try asking e.g. <code>Create sentences about swedish cousine</code>{" "}
            below!
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <ToastProvider>
      <div className="w-full h-full flex-1 flex flex-col relative">
        <div className="w-full bg-baseSecondary py-3 px-8 fixed top-0 left-0 right-0 z-50">
          <h1 className="text-2xl leading-6 flex items-center gap-2">
            <span className="text-4xl">🇸🇪</span>
            Min svenskalärare
          </h1>
        </div>
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full pt-20 pb-8 px-7 mt-3">
          <div className="w-full md:w-1/2  rounded-xl border border-borderPrimary  md:min-h-full  h-[600px] md:h-auto mb-8 md:mb-0 overflow-y-scroll">
            <ChatWindow
              endpoint="chat/swedish"
              emoji="🤖"
              titleText="Min svenskalärare"
              placeholder="Skriv här..."
              emptyStateComponent={InfoCard}
            />
          </div>
          <div className="flex  md:w-1/2 flex-col gap-8">
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

      <Link
        href="https://www.buymeacoffee.com/gustavoferreira"
        className="hidden md:block bottom-0 right-8 absolute text-sm text-white underline cursor-pointer opacity-60"
      >
        Made by Gustavo Ferreira ©
      </Link>
    </ToastProvider>
  );
}
