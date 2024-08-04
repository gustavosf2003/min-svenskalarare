import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { WordRequestType } from "@/types/dictionary";
import SkeletonLoading from "../Skeleton";
import WordTable from "./WordTable";
import { WORD_FORMS } from "@/utils/dictionary";

const grammaticalClassMap = {
  vb: WORD_FORMS.VERB,
  vbm: WORD_FORMS.VERB,
  nn: WORD_FORMS.NOUN,
  nnm: WORD_FORMS.NOUN,
  av: WORD_FORMS.ADJECTIVE,
  avm: WORD_FORMS.ADJECTIVE,
  ab: WORD_FORMS.ADVERB,
  abm: WORD_FORMS.ADVERB,
  in: WORD_FORMS.INTERJECTION,
  inm: WORD_FORMS.INTERJECTION,
  pp: WORD_FORMS.PREPOSITION,
  ppm: WORD_FORMS.PREPOSITION,
  kn: WORD_FORMS.CONJUNCTION,
  sn: WORD_FORMS.CONJUNCTION,
  snm: WORD_FORMS.CONJUNCTION,
  pn: WORD_FORMS.PRONOUN,
};

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
    return (
      <p className="text-gray-400">
        Something went wrong. Please try again later.
      </p>
    );
  }

  const wordSource = data.hits?.hits[currentIndex]?._source;
  const partOfSpeech = wordSource?.FormRepresentations[0]?.partOfSpeech;
  const wordForms = grammaticalClassMap[partOfSpeech] || null;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full pb-3 overflow-x-scroll md:pb-0">
          <div>
            <p className="text-sm font-light">
              <span className="text-gray-400"> Resultat för : </span>
              <span className="font-semibold underline">
                {wordSource?.FormRepresentations[0]?.baseform}
              </span>
            </p>
            {wordForms ? (
              <WordTable data={wordSource} wordForms={wordForms} />
            ) : (
              <p className="text-gray-400">
                Fel vid försök att hitta komponenten
              </p>
            )}
          </div>
        </div>
        {data.hits?.hits.length > 1 && (
          <div className="flex gap-4 mt-4">
            <button
              aria-label="Föregående"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex > 0 ? prevIndex - 1 : data.hits.hits.length - 1,
                )
              }
              disabled={currentIndex === 0}
              className="flex items-center gap-3 px-3 py-1 text-sm border-t-2 border-transparent rounded-full hover:bg-[#2F2F2F] hover:bg-opacity-40 disabled:opacity-50"
            >
              <ChevronLeftIcon width={20} strokeWidth={2} />
            </button>
            <p>{currentIndex + 1}</p>
            <button
              aria-label="Nästa"
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex < data.hits.hits.length - 1 ? prevIndex + 1 : 0,
                )
              }
              disabled={currentIndex === data.hits.hits.length - 1}
              className="flex items-center gap-3 px-3 py-1 text-sm border-t-2 border-transparent rounded-full hover:bg-[#2F2F2F] hover:bg-opacity-40 disabled:opacity-50"
            >
              <ChevronRightIcon width={20} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
