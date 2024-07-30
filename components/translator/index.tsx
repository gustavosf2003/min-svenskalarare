"use client";
import { useEffect, useState } from "react";

import { ArrowsDownUp } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "@/hooks/useDebounce";
import translatorService from "@/services/translator";

import Dropdown from "../Dropdown";
import SkeletonLoading from "../Skeleton";
import { TextArea } from "../TextArea";

const languages = [
  {
    id: 1,
    language: "Svenska",
    icon: "🇸🇪",
    sourceLocale: "SV",
    targetLocale: "SV",
  },
  {
    id: 2,
    language: "English",
    icon: "🇬🇧",
    sourceLocale: "EN",
    targetLocale: "en-GB",
  },
  {
    id: 3,
    language: "Português",
    icon: "🇧🇷",
    sourceLocale: "PT",
    targetLocale: "pt-PT",
  },
  {
    id: 4,
    language: "Русский",
    icon: "🇷🇺",
    sourceLocale: "RU",
    targetLocale: "RU",
  },
];

const TranslatorComponent = () => {
  const [selectedLocale, setSelectedLocale] = useState(languages[0]);
  const [selectedTargetLocale, setSelectedTargetLocale] = useState(
    languages[1],
  );
  const [text, setText] = useState("");

  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["translator", text, selectedLocale, selectedTargetLocale],
    queryFn: () =>
      translatorService.translate(
        text,
        selectedLocale.sourceLocale,
        selectedTargetLocale.targetLocale,
      ),
    initialData: "",
    enabled: false, // Set to true to automatically fetch on mount
  });

  const debouncedSearch = useDebounce(text);

  useEffect(() => {
    const loadTranslation = async () => {
      if (text.length > 0 && text.length < 400) {
        await refetch();
      }
    };
    loadTranslation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, selectedLocale, selectedTargetLocale]);

  const handleSwapLanguages = () => {
    const temp = selectedLocale;
    setSelectedLocale(selectedTargetLocale);
    setSelectedTargetLocale(temp);
    setText(data || "");
  };

  return (
    <div className="justify-between w-full h-full gap-4 md:flex">
      <div className="flex flex-col items-start w-full gap-3">
        <div className="relative w-40">
          <Dropdown
            items={languages.filter(
              (language) =>
                language.sourceLocale !== selectedLocale.sourceLocale,
            )}
            selectedItem={selectedLocale}
            setSelectedItem={setSelectedLocale}
          />
        </div>
        <TextArea
          placeholder="Skriv här.."
          className="w-[100%] h-40 md:h-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-start w-full gap-3 mt-3 md:mt-0">
        <div className="flex justify-between w-full">
          <Dropdown
            items={languages.filter(
              (language) =>
                language.targetLocale !== selectedTargetLocale.targetLocale,
            )}
            selectedItem={selectedTargetLocale}
            setSelectedItem={setSelectedTargetLocale}
          />
          <button
            className="px-3.5 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
            onClick={handleSwapLanguages}
          >
            <ArrowsDownUp className="rotate-90" size={20} />
          </button>
        </div>
        <div className="bg-[#3E3D3B]/20 w-full h-40 md:h-full rounded-xl px-3.5 py-[10.5px] text-sm">
          {isFetching ? (
            <div>
              <SkeletonLoading width={250} height={32} />
            </div>
          ) : isError ? (
            "Error fetching data"
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
};
export default TranslatorComponent;
