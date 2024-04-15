import { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../InputText";
import { useQuery } from "@tanstack/react-query";
import { WordRequestType } from "@/types/dictionary";
import dictionaryService from "@/services/dictionary";
import Results from "./Results";

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
        <p className="text-center text-xl">Lexikon</p>
        <div className="flex justify-center w-full ">
          <div className="flex justify-center gap-2">
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
            {/* {!isCleared && (
              <Button
                onClick={() => {
                  setWord("");
                  setCurrentIndex(0);
                  setIsCleared(true);
                }}
              >
                Rensa
              </Button>
            )} */}
          </div>
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
