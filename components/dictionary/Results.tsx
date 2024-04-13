import { WordRequestType } from "@/types/dictionary";
import VerbComponent from "./Verb";

const Results = ({
  data,
  isLoading,
  isError,
}: {
  data: WordRequestType;
  isLoading: boolean;
  isError: boolean;
}) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  function getGrammaticalClassComponent(gramaticalClass: string) {
    const wordSource = data.hits?.hits[0]._source;
    switch (gramaticalClass) {
      case "vb":
        return <VerbComponent data={wordSource} />;
      case "vbm":
        return <VerbComponent data={wordSource} />;
      default:
        return <p>Error trying to find the component</p>;
    }
  }

  return (
    <div className="mt-8 bg-gray-800 p-4 w-full rounded-md">
      <p className="">Searched word: {data.searchedWord}</p>
      {getGrammaticalClassComponent(
        data.hits?.hits[0]?._source.FormRepresentations[0].partOfSpeech,
      )}
    </div>
  );
};

export default Results;
