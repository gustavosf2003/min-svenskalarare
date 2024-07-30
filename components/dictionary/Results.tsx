import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { WordRequestType } from "@/types/dictionary";

import AdjektivComponent from "./grammaticalTypes/Adjektiv";
import AdverbComponent from "./grammaticalTypes/Adverb";
import ConjunctionComponent from "./grammaticalTypes/Conjunction";
import InterjectionComponent from "./grammaticalTypes/Interjection";
import NounComponent from "./grammaticalTypes/Noun";
import PrepositionComponent from "./grammaticalTypes/Preposition";
import PronoumComponent from "./grammaticalTypes/Pronoum";
import VerbComponent from "./grammaticalTypes/Verb";
import SkeletonLoading from "../Skeleton";

const Results = ({
  data,
  isLoading,
  isError,
  currentIndex,
  setCurrentIndex,
}: {
  data: WordRequestType;
  isLoading: boolean;
  isError: boolean;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-2 mt-8">
        <div className="lg:hidden flex gap-1.5 flex-col">
          <SkeletonLoading width={240} height={32} />
          <SkeletonLoading width={240} height={32} />
        </div>
        <div className="flex-col gap-1.5 hidden lg:flex">
          <SkeletonLoading width={100} height={32} />
          <SkeletonLoading width={400} height={32} />
          <SkeletonLoading width={400} height={32} />
          <div className="flex justify-center w-full mt-4">
            <SkeletonLoading width={100} height={32} />
          </div>
        </div>
      </div>
    );
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
      default:
        return (
          <p className="text-gray-400">Fel vid försök att hitta komponenten</p>
        );
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
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full pb-3 overflow-x-scroll md:pb-0">
            <div>
              <p className="text-sm font-light">
                <span className="text-gray-400"> Resultat för : </span>
                <span className="font-semibold underline">
                  {
                    data.hits?.hits[currentIndex]?._source
                      .FormRepresentations[0].baseform
                  }
                </span>
              </p>
              {getGrammaticalClassComponent(
                data.hits?.hits[currentIndex]?._source.FormRepresentations[0]
                  .partOfSpeech,
                currentIndex,
              )}
            </div>
          </div>
          {data.hits?.hits.length > 1 && (
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDecreaseIndex}
                className="flex items-center gap-3 px-2 py-1 text-sm border-t-2 border-transparent rounded-lg hover:bg-gray-800"
              >
                <ChevronRightIcon
                  className="rotate-180"
                  width={20}
                  strokeWidth={2}
                />
              </button>
              <p>{currentIndex + 1}</p>

              <button
                onClick={handleIncreaseIndex}
                className="flex items-center gap-3 px-2 py-1 text-sm border-t-2 border-transparent rounded-lg hover:bg-gray-800"
              >
                <ChevronLeftIcon
                  className="rotate-180"
                  width={20}
                  strokeWidth={2}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
