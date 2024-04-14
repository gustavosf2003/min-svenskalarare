import { useState } from "react";
import { WordRequestType } from "@/types/dictionary";
import VerbComponent from "./Verb";
import NounComponent from "./Noun";
import { Button } from "../Button";
import AdjektivComponent from "./Adjektiv";
import AdverbComponent from "./Adverb";
import InterjectionComponent from "./Interjection";
import PrepositionComponent from "./Preposition";
import ConjunctionComponent from "./Conjunction";
import PronoumComponent from "./Pronoum";

const Results = ({
  data,
  isLoading,
  isError,
}: {
  data: WordRequestType;
  isLoading: boolean;
  isError: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current index

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  function getGrammaticalClassComponent(
    grammaticalClass: string,
    index: number,
  ) {
    const wordSource = data.hits?.hits[index]?._source;
    switch (grammaticalClass) {
      case "vb":
        return <VerbComponent data={wordSource} />;
      case "vbm":
        return <VerbComponent data={wordSource} />;
      case "nn":
        return <NounComponent data={wordSource} />;
      case "nnm":
        return <NounComponent data={wordSource} />;
      case "av":
        return <AdjektivComponent data={wordSource} />;
      case "avm":
        return <AdjektivComponent data={wordSource} />;
      case "ab":
        return <AdverbComponent data={wordSource} />;
      case "abm":
        return <AdverbComponent data={wordSource} />;
      case "in":
        return <InterjectionComponent data={wordSource} />;
      case "inm":
        return <InterjectionComponent data={wordSource} />;
      case "pp":
        return <PrepositionComponent data={wordSource} />;
      case "ppm":
        return <PrepositionComponent data={wordSource} />;
      case "kn":
        return <ConjunctionComponent data={wordSource} />;
      case "sn":
        return <ConjunctionComponent data={wordSource} />;
      case "snm":
        return <ConjunctionComponent data={wordSource} />;
      case "pn":
        return <PronoumComponent data={wordSource} />;
      case "pnm":
        return <PronoumComponent data={wordSource} />;
      default:
        return <p>Error trying to find the component</p>;
    }
  }

  const handleIncreaseIndex = () => {
    if (currentIndex < data.hits?.hits.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const handleDecreaseIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(data.hits?.hits.length - 1);
    }
  };
  console.log(data.hits?.hits[currentIndex]?._source);
  return (
    <>
      <div className="mt-8 bg-gray-800 p-4 w-full rounded-md">
        <p className="">Results for: {data.searchedWord}</p>
        {getGrammaticalClassComponent(
          data.hits?.hits[currentIndex]?._source.FormRepresentations[0]
            .partOfSpeech,
          currentIndex,
        )}
      </div>
      {data.hits?.hits.length > 1 && (
        <div className="flex gap-4">
          <Button onClick={handleDecreaseIndex}>{"<"}</Button>
          <p>{currentIndex + 1}</p>
          <Button onClick={handleIncreaseIndex}>{">"}</Button>
        </div>
      )}
    </>
  );
};

export default Results;
