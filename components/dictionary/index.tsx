import { useState } from "react";

import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import dictionaryService from "@/services/dictionary";
import { WordRequestType } from "@/types/dictionary";

import Results from "./Results";
import { InputText } from "../InputText";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [isCleared, setIsCleared] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["dicionary", word],
    queryFn: () => dictionaryService.getWord(word),
    initialData: {} as WordRequestType,
    enabled: false,
  });

  return (
    <>
      <div className="flex flex-col pt-4 mb-8">
        <p className="text-2xl text-center">Lexikon</p>
        <div className="relative flex justify-center w-full mt-4">
          <form className="flex justify-center gap-2">
            <div className="relative">
              <InputText
                onChange={(e) => setWord(e.target.value)}
                placeholder="Sök efter ord"
                className="!pr-10"
                value={word}
              />
              <button
                aria-label="Sök efter ord"
                className={clsx(
                  "hover:bg-[#3C4043] p-2 rounded-full absolute right-2 top-2.5 h-8 w-8",
                  word.trim().length > 0
                    ? "transition-all ease-in-out duration-900 opacity-100"
                    : "transition-all ease-in-out duration-900 opacity-0",
                )}
                type="submit"
                disabled={isFetching || word.trim().length === 0}
                onClick={(e) => {
                  e.preventDefault();
                  refetch();
                  setCurrentIndex(0);
                  setIsCleared(false);
                }}
              >
                <MagnifyingGlass />
              </button>
            </div>
            {!isCleared && (
              <button
                aria-label="Rensa sökord"
                className="items-center hidden gap-2 p-2 text-red-800 rounded-md md:flex hover:bg-basePrimary top-1 hover:opacity-60"
                onClick={() => {
                  setWord("");
                  setCurrentIndex(0);
                  setIsCleared(true);
                }}
              >
                <XCircle size={24} weight="bold" />
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="px-4 pb-8">
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
    </>
  );
};

export default Dictionary;
