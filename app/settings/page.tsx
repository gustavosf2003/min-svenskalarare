"use client";
import { ChatWindow } from "@/components/chat/ChatWindow";
import InfoCard from "@/components/chat/InfoCard";
import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import RangeSlider from "@/components/RangeSlider";
import SelectableBadge from "@/components/SelectableBadge";
import TranslatorComponent from "@/components/translator";
import Dictionary from "@/services/dictionary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PREFERENCES = [
  "Mat",
  "Musik",
  "Sport",
  "Teknologi",
  "Resor",
  "Litteratur",
  "Film",
  "Konst",
  "Fotografering",
  "Fotboll",
  "Spel",
  "Trädgårdsarbete",
  "Fitness",
  "Matlagning",
  "Mode",
  "Historia",
  "Vetenskap",
  "Friluftsliv",
  "Djur",
  "Hantverk",
  "Dans",
];
const languages = [
  {
    id: 1,
    language: "English",
    icon: "🇬🇧",
  },
  {
    id: 2,
    language: "Português",
    icon: "🇧🇷",
  },
  {
    id: 3,
    language: "Русский",
    icon: "🇷🇺",
  },

  {
    id: 6,
    language: "Suomi",
    icon: "🇫🇮",
  },
  {
    id: 12,
    language: "Norsk",
    icon: "🇳🇴",
  },
  {
    id: 13,
    language: "Dansk",
    icon: "🇩🇰",
  },
  {
    id: 10,
    language: "Deutsch",
    icon: "🇩🇪",
  },
  {
    id: 7,
    language: "Español",
    icon: "🇪🇸",
  },
  {
    id: 4,
    language: "العربية",
    icon: "🇸🇦",
  },
  {
    id: 5,
    language: "Polski",
    icon: "🇵🇱",
  },
  {
    id: 8,
    language: "中文",
    icon: "🇨🇳",
  },
  {
    id: 9,
    language: "हिन्दी",
    icon: "🇮🇳",
  },
  {
    id: 11,
    language: "Ελληνικά",
    icon: "🇬🇷",
  },
];
const Settings = () => {
  const router = useRouter();
  const [preferences, setPreferences] = useState([]);
  const [values, setValues] = useState([2]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <>
      <div className="w-full h-full flex-1 flex flex-col relative">
        <Navbar />
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full justify-center pt-20 pb-8 px-7 mt-3">
          <div className="flex  md:w-1/2 flex-col gap-8">
            <div>
              <button
                className="text-sm"
                onClick={() => {
                  router.back();
                }}
              >
                Back
              </button>
              <h2 className="text-2xl font-medium -mb-1">
                Assistant inställningar
              </h2>
              <p>Ändra inställningar för din assistent här</p>
            </div>
            <div className="rounded-xl border border-borderPrimary p-4 mb-8 md:mb-0">
              <div>
                <p>Vad är dina intressen?</p>
                <div className="flex flex-wrap gap-2">
                  {PREFERENCES.map((pref) => (
                    <SelectableBadge
                      key={pref}
                      selected={preferences.includes(pref)}
                      onChange={(e) => {
                        if (preferences.includes(pref)) {
                          setPreferences(
                            preferences.filter((pref) => pref !== pref),
                          );
                        } else {
                          setPreferences([...preferences, pref]);
                        }
                      }}
                    >
                      {pref}
                    </SelectableBadge>
                  ))}
                </div>
              </div>
              <div className="h-0.5 bg-borderPrimary my-3" />
              <div>
                <p>Hur formell ska din assistent vara?</p>
                <div className="relative px-8 mt-8">
                  <div className="absolute flex justify-between left-0 w-full -top-7">
                    <p className="text-xs ml-1.5">Informell</p>
                    <p className="text-xs -ml-1.5">Standard</p>
                    <p className="text-xs mr-2.5">Formell</p>
                  </div>
                  <RangeSlider
                    onChange={(values) => {
                      setValues(values);
                    }}
                    values={values}
                  />
                </div>
              </div>
              <div className="h-0.5 bg-borderPrimary my-3" />
              <div>
                <p>Välja en hjälp språk</p>
                <Dropdown
                  items={languages.filter(
                    (language) =>
                      language.language !== selectedLanguage.language,
                  )}
                  selectedItem={selectedLanguage}
                  setSelectedItem={setSelectedLanguage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
