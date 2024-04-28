import { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../InputText";
import { useQuery } from "@tanstack/react-query";
import { WordRequestType } from "@/types/dictionary";
import dictionaryService from "@/services/dictionary";
import Results from "./Results";
import { TrashIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Dictionary = () => {
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
      <div className="flex flex-col pt-4 mb-8">
        <p className="text-center text-2xl">Lexikon</p>
        <div className="flex justify-center w-full relative mt-4">
          <form className="flex justify-center gap-2 md:ml-12">
            <InputText
              onChange={(e) => setWord(e.target.value)}
              placeholder="Sök efter ord"
              value={word}
            />
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                refetch();
                setCurrentIndex(0);
                setIsCleared(false);
              }}
            >
              Sök
            </Button>
            {!isCleared && (
              <button
                className="hidden md:flex rounded-md hover:bg-gray-800 p-2 gap-2 top-1 text-red-800 items-center hover:opacity-60"
                onClick={() => {
                  setWord("");
                  setCurrentIndex(0);
                  setIsCleared(true);
                }}
              >
                <XCircleIcon width={24} strokeWidth={1.8} />
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
