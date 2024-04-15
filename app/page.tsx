"use client";
import { ChatWindow } from "@/components/ChatWindow";
import Dictionary from "@/components/dictionary";
import TranslatorComponent from "@/components/translator";
import Link from "next/link";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[340px]  lg:overflow-hidden overflow-y-auto">
      <a href="https://github.com/gustavosf2003">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">
          Min Svenska Lärare 🇸🇪 🔗
        </h1>
      </a>
      <ul>
        <li className="text-l">
          👨‍🏫
          <span className="ml-2">
            Welcome to the Min Swenska Lärare. I am Linnea, your friendly
            virtual Swedish language teacher!
          </span>
        </li>
        <li className="text-l">
          📝
          <span className="ml-2">
            Create Homework: Linnea can generate custom homework tailored to
            their language proficiency level and subjects
          </span>
        </li>
        <li className="text-l">
          🏋️‍♀️
          <span className="ml-2">
            Generate Exercises: Linnea can generate exercises to help you
            reinforce your Swedish language skills, from vocabulary quizzes to
            verb conjugation drills
          </span>
        </li>
        <li className="text-l">
          📖
          <span className="ml-2">
            Improve your reading skills: Here you can ask to read articles,
            poems and even fairy tales in Swedish. Please note that the
            available articles are up until August 2021.
          </span>
        </li>
        <li className="text-l">
          🌟
          <span className="ml-2">
            Don&apos;t hesitate to ask her anything, whether it&apos;s about
            Swedish traditions, idioms, or any aspect of the language
          </span>
        </li>

        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>Give 10 words related to sports </code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  // <ChatWindow
  //   endpoint="chat/swedish"
  //   emoji="🤖"
  //   titleText="Min svenska lärare"
  //   placeholder="Type your message"
  //   emptyStateComponent={InfoCard}
  // />
  return (
    <div className="w-full h-full flex-1 flex relative ">
      <div className="w-full bg-gray-800 py-1.5 px-8 fixed">
        <h1 className="text-2xl leading-6 flex items-center gap-2">
          <span className="text-4xl">🇸🇪</span>
          Min svenska Lärare
        </h1>
      </div>
      <div className="w-full block md:flex gap-8 flex-1 min-h-full pt-20 pb-8 px-7">
        <div className="w-full md:w-1/2 h-full bg-gray-700 rounded-sm shadow-md mb-8">
          CHAT
        </div>
        <div className="flex  md:w-1/2 flex-col gap-8">
          <div className="h-[55%] bg-gray-700 rounded-sm shadow-md ">
            <Dictionary />
          </div>
          <div className="h-[45%] bg-gray-700 rounded-sm shadow-md p-4 mb-8 md:mb-0">
            <TranslatorComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
