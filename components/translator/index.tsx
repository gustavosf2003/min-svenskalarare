import { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../InputText";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { TextArea } from "../TextArea";
import Dropdown from "../Dropdown";
const languages = [
  { id: 1, language: "Svenska", icon: "🇸🇪", locale: "sv" },
  { id: 2, language: "English", icon: "🇬🇧", locale: "en" },
  { id: 3, language: "Português", icon: "🇧🇷", locale: "pt" },
  { id: 4, language: "Русский", icon: "🇷🇺", locale: "ru" },
];
const TranslatorComponent = () => {
  const [selectedLocale, setSelectedLocale] = useState(languages[0]);
  const [selectedTargetLocale, setSelectedTargetLocale] = useState(
    languages[1],
  );
  const [text, setText] = useState("");
  return (
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
          {text}
        </div>
      </div>
    </div>
  );
};
export default TranslatorComponent;
