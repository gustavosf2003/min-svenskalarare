import { useState } from "react";
import SelectableBadge from "../SelectableBadge";
import RangeSlider from "../RangeSlider";
import Dropdown from "../Dropdown";
import { InputText } from "../InputText";
import clsx from "clsx";
import {
  Heart,
  IconBase,
  Lightbulb,
  LightbulbFilament,
  Notepad,
  Plus,
  PlusCircle,
  PuzzlePiece,
  Translate,
} from "@phosphor-icons/react";
import { Button } from "../Button";
import { LANGUAGES, PREFERENCES } from "@/utils/settings";
import Title from "../Title";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr";

const getVocabularyText = (value: number): string => {
  switch (value) {
    case 1:
      return "Din assistent kommer att använda ett enkelt ordförråd";
    case 2:
      return "Din assistent kommer att använda en blandning av enkel och komplex ordlista";
    default:
      return "Din assistent kommer att använda en komplex ordlista";
  }
};

const SettingsForm = () => {
  const [preferences, setPreferences] = useState([]);
  const [otherPreferences, setOtherPreferences] = useState([]);
  const [values, setValues] = useState([2]);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [inputText, setInputText] = useState("");
  const isActive = inputText.length < 20 && inputText.trim().length > 2;
  return (
    <div className="rounded-xl border border-borderPrimary p-4 mb-8 md:mb-0">
      <div>
        <Title icon={<PuzzlePiece size={20} />} text="Vad är dina intressen?" />
        <div className="flex flex-wrap gap-2">
          {PREFERENCES.map((pref) => (
            <SelectableBadge
              key={pref}
              selected={preferences.includes(pref)}
              onChange={(e) => {
                if (preferences.includes(pref)) {
                  setPreferences(preferences.filter((pref) => pref !== pref));
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
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div>
        <Title
          icon={<Notepad size={20} />}
          text="Vilken typ av ordförråd ska din assistent använda? "
        />
        <div className="relative px-6 mt-6">
          <div className="absolute flex justify-between left-2 w-full -top-7">
            <p className="text-xs -ml-1.5">Lättsvenska</p>
            <p className="text-xs -ml-5">Standard</p>
            <p className="text-xs mr-2.5">Komplex</p>
          </div>
          <RangeSlider
            onChange={(values) => {
              setValues(values);
            }}
            values={values}
          />
          <div className="w-full text-center">
            <p className="text-sm">{getVocabularyText(values[0])}</p>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div className="relative z-20">
        <Title icon={<Translate size={20} />} text="Välja en hjälp språk" />
        <Dropdown
          items={LANGUAGES.filter(
            (language) => language.language !== selectedLanguage.language,
          )}
          selectedItem={selectedLanguage}
          setSelectedItem={setSelectedLanguage}
        />
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div>
        <Title
          icon={<LightbulbFilament size={20} />}
          text="Andra preferenser"
        />
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isActive) return;
            if (otherPreferences.includes(inputText)) return;
            setOtherPreferences([...otherPreferences, inputText]);
            setInputText("");
          }}
        >
          <div className="relative">
            <InputText
              placeholder="Lägg till en ny preferens"
              className="!h-9"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              value={inputText}
            />

            <Button.Icon disabled={isActive}>
              <Plus weight="bold" size={14} className="text-basePrimary" />
            </Button.Icon>
          </div>
        </form>
        <div className="flex flex-wrap gap-2 mt-3">
          {otherPreferences.map((pref) => (
            <SelectableBadge
              key={pref}
              selected={true}
              onChange={(e) => {
                setOtherPreferences(otherPreferences.filter((p) => p !== pref));
              }}
            >
              {pref}
            </SelectableBadge>
          ))}
        </div>
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div className="w-full mt-4">
        <Button.Primary
          disabled
          className="w-full"
          onClick={async () => {
            // await savePreferences();
            // router.push("/home");
          }}
        >
          Spara
        </Button.Primary>
      </div>
    </div>
  );
};

export default SettingsForm;
