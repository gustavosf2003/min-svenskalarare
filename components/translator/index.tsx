"use client";
import { useEffect, useState } from "react";
import { TextArea } from "../TextArea";
import Dropdown from "../Dropdown";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../Button";
import translatorService from "@/services/translator";
import { TranslationType } from "@/types/translation";
import Loading from "../Loading";
import { useDebounce } from "@/hooks/useDebounce";

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
    queryFn: () => {
      return translatorService.translate(
        text,
        selectedLocale.sourceLocale,
        selectedTargetLocale.targetLocale,
      );
    },
    initialData: {} as TranslationType,
    enabled: false,
  });
  const debouncedSearch = useDebounce(text);

  useEffect(() => {
    const loadUsers = async () => {
      if (text.length > 0 && text.length < 400) {
        await refetch();
      }
    };
    loadUsers();
  }, [debouncedSearch, selectedLocale, selectedTargetLocale]);

  return (
    <div className="w-full md:flex justify-between gap-4 h-full">
      <div className="gap-3 w-full flex flex-col items-start">
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
          className="w-[100%] h-40 md:h-full "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="gap-3 w-full flex flex-col items-start mt-3 md:mt-0">
        <Dropdown
          items={languages.filter(
            (language) =>
              language.targetLocale !== selectedTargetLocale.targetLocale,
          )}
          selectedItem={selectedTargetLocale}
          setSelectedItem={setSelectedTargetLocale}
        />
        <div className="bg-gray-900 w-full h-40 md:h-full rounded px-3.5 py-[10.5px]  text-sm">
          {isFetching ? (
            <Loading />
          ) : isError ? (
            "Error fetching data"
          ) : (
            data?.text
          )}
        </div>
      </div>
    </div>
  );
};
export default TranslatorComponent;
