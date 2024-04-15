"use client";
import { useEffect, useState } from "react";
import { TextArea } from "../TextArea";
import Dropdown from "../Dropdown";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../Button";
import translatorService from "@/services/translator";
import { TranslationType } from "@/types/translation";

const languages = [
  { id: 1, language: "Svenska", icon: "🇸🇪", locale: "sv" },
  { id: 2, language: "English", icon: "🇬🇧", locale: "en-GB" },
  { id: 3, language: "Português", icon: "🇧🇷", locale: "pt" },
  { id: 4, language: "Русский", icon: "🇷🇺", locale: "ru" },
];

const TranslatorComponent = () => {
  const [selectedLocale, setSelectedLocale] = useState(languages[0]);
  const [isQueryEnabled, setIsQueryEnabled] = useState(false);
  const [selectedTargetLocale, setSelectedTargetLocale] = useState(
    languages[1],
  );

  const [text, setText] = useState("");

  const { data, refetch, isFetching, isError } = useQuery({
    queryKey: ["translator"],
    queryFn: () =>
      translatorService.translate(
        text,
        selectedLocale.locale,
        selectedTargetLocale.locale,
      ),
    initialData: {} as TranslationType,
    enabled: isQueryEnabled,
  });

  useEffect(() => {
    setIsQueryEnabled(false);
    setText("");
  }, [selectedLocale, selectedTargetLocale]);

  return (
    <>
      <Button onClick={() => refetch()}>Oversätt</Button>
      <div className="w-full flex justify-between gap-4 pb-80">
        <div className="gap-3 w-full flex flex-col items-start">
          <div className="relative w-40">
            <Dropdown
              items={languages.filter(
                (language) => language.locale !== selectedLocale.locale,
              )}
              selectedItem={selectedLocale}
              setSelectedItem={setSelectedLocale}
            />
          </div>
          <TextArea
            className="w-[100%] h-40"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="gap-3 w-full flex flex-col items-start">
          <Dropdown
            items={languages.filter(
              (language) => language.locale !== selectedTargetLocale.locale,
            )}
            selectedItem={selectedTargetLocale}
            setSelectedItem={setSelectedTargetLocale}
          />
          <div className="bg-gray-900 w-full h-40 px-3.5 py-[10.5px]  text-sm">
            {JSON.stringify(data)}
          </div>
        </div>
      </div>
    </>
  );
};
export default TranslatorComponent;
