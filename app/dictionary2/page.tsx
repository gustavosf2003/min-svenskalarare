"use client";
import { Button } from "@/components/Button";
import Results from "@/components/dictionary/Results";
import { InputText } from "@/components/InputText";
import dictionaryService from "@/services/dictionary";
import { WordRequestType } from "@/types/dictionary";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Dictionary2 = () => {
  const [word, setWord] = useState("");
  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["dicionary"],
    queryFn: () => dictionaryService.getWord(word),
    initialData: {} as WordRequestType,
    enabled: false,
  });

  return (
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
          }}
        >
          Sök
        </Button>
      </div>
      <Results data={data} isLoading={isFetching} isError={isError} />
    </div>
  );
};

export default Dictionary2;
