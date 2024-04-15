"use client";
import { Button } from "@/components/Button";
import Results from "@/components/dictionary/Results";
import { InputText } from "@/components/InputText";
import TranslatorComponent from "@/components/translator";
import dictionaryService from "@/services/dictionary";
import { WordRequestType } from "@/types/dictionary";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dictionary2 = () => {
  return (
    <>
      <div className="mt-12 p-4 md:p-8 rounded flex-col flex items-center bg-[#25252d] w-full   lg:overflow-hidden overflow-y-auto">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">Oversättning</h1>
        <TranslatorComponent />
      </div>
    </>
  );
};

export default Dictionary2;
