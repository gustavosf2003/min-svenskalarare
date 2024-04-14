import { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../InputText";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { TextArea } from "../TextArea";
const languages = [
  { id: 1, language: "Svenska", icon: "🇸🇪", locale: "sv" },
  { id: 2, language: "English", icon: "🇬🇧", locale: "en" },
  { id: 3, language: "Português", icon: "🇧🇷", locale: "pt" },
  { id: 4, language: "Русский", icon: "🇷🇺", locale: "ru" },
];
const TranslatorComponent = () => {
  const [selectedLocale, setselectedLocale] = useState(languages[0]);
  const [selectedTargetLocale, setSelectedTargetLocale] = useState(
    languages[0],
  );

  return (
    <div className="w-full flex justify-between gap-4 pb-80">
      <div className="gap-3 w-full flex flex-col items-start">
        <div className="relative w-40">
          <Listbox value={selectedLocale} onChange={setselectedLocale}>
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gray-800  shadow-md  focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex items-center gap-2 px-2 py-2">
              <span className="text-xl">{selectedLocale.icon}</span>
              {selectedLocale.language}
              <span className="absolute right-2">
                <ChevronUpDownIcon color="white" width={18}></ChevronUpDownIcon>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages
                .filter((language) => language.locale !== selectedLocale.locale)
                .map((language) => (
                  <Listbox.Option
                    className="hover:bg-gray-900 flex items-center gap-2 px-2 cursor-pointer py-1"
                    key={language.id}
                    value={language}
                    disabled={language.language === selectedLocale.language}
                  >
                    <span className="text-xl">{language.icon}</span>
                    {language.language}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <TextArea className="w-[100%] h-40" />
      </div>
      <div className="gap-3 w-full flex flex-col items-start">
        <div className="relative w-40">
          <Listbox
            value={selectedTargetLocale}
            onChange={setSelectedTargetLocale}
          >
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-gray-800  shadow-md  focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex items-center gap-2 px-2 py-2">
              <span className="text-xl">{selectedTargetLocale.icon}</span>
              {selectedTargetLocale.language}
              <span className="absolute right-2">
                <ChevronUpDownIcon color="white" width={18}></ChevronUpDownIcon>
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages
                .filter(
                  (language) => language.locale !== selectedTargetLocale.locale,
                )
                .map((language) => (
                  <Listbox.Option
                    className="hover:bg-gray-900 flex items-center gap-2 px-2 cursor-pointer py-1"
                    key={language.id}
                    value={language}
                    disabled={
                      language.language === selectedTargetLocale.language
                    }
                  >
                    <span className="text-xl">{language.icon}</span>
                    {language.language}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="bg-gray-900 w-full h-40"></div>
      </div>
    </div>
  );
};
export default TranslatorComponent;
