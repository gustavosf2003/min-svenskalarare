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
  const [word, setWord] = useState("");
  const [isCleared, setIsCleared] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["dicionary"],
    queryFn: () => dictionaryService.getWord(word),
    initialData: {} as WordRequestType,
    enabled: false,
  });

  return (
    <>
      <div className="p-4 md:p-8 rounded flex-col flex items-center bg-[#25252d] w-full   lg:overflow-hidden overflow-y-auto">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">
          🚧 Under utveckling 🚧
        </h1>
        <div className="flex gap-4">
          <InputText
            onChange={(e) => setWord(e.target.value)}
            placeholder="Sök efter ord"
            value={word}
          />
          <Button
            onClick={() => {
              refetch();
              setCurrentIndex(0);
              setIsCleared(false);
            }}
          >
            Sök
          </Button>
          {!isCleared && (
            <Button
              onClick={() => {
                setWord("");
                setCurrentIndex(0);
                setIsCleared(true);
              }}
            >
              Rensa
            </Button>
          )}
        </div>
        {!isCleared && (
          <Results
            data={data}
            isLoading={isFetching}
            isError={isError}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
      <div className="mt-12 p-4 md:p-8 rounded flex-col flex items-center bg-[#25252d] w-full   lg:overflow-hidden overflow-y-auto">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">Oversättning</h1>
        <TranslatorComponent />
      </div>
    </>
  );
};

export default Dictionary2;
