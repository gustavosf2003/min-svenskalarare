import { useState } from "react";
import SelectableBadge from "../SelectableBadge";
import RangeSlider from "../RangeSlider";
import Dropdown from "../Dropdown";
import { InputText } from "../InputText";
import clsx from "clsx";
import {
  LightbulbFilament,
  Notepad,
  Plus,
  PuzzlePiece,
  Translate,
} from "@phosphor-icons/react";
import { Button } from "../Button";
import { LANGUAGES, PREFERENCES } from "@/utils/settings";
import Title from "../Title";
import { Controller, useForm } from "react-hook-form";
import { set } from "zod";

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
  const [inputText, setInputText] = useState("");
  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    setError,
    watch,
    control,
    formState: { isDirty, isValid, errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      preferences: [],
      otherPreferences: [],
      vocabularyLevel: 2,
      selectedLanguage: LANGUAGES[0],
    },
  });
  const isValidPreference =
    inputText.length < 30 && inputText.trim().length > 2;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="rounded-xl border border-borderPrimary p-4 mb-8 md:mb-0">
      <div>
        <Title
          icon={<PuzzlePiece size={20} />}
          text="Vilka ämnen gillar du att prata om?"
        />
        <div className="flex flex-wrap gap-2">
          {PREFERENCES.map((pref) => (
            <Controller
              key={pref}
              control={control}
              name="preferences"
              render={({ field: { onChange, value } }) => (
                <SelectableBadge
                  key={pref}
                  selected={value.includes(pref)}
                  onChange={(e) => {
                    if (value.includes(pref)) {
                      onChange(value.filter((p) => p !== pref));
                    } else {
                      onChange([...value, pref]);
                    }
                  }}
                >
                  {pref}
                </SelectableBadge>
              )}
            />
          ))}
        </div>
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div>
        <Title
          icon={<Notepad size={20} />}
          text="Vilken typ av ordförråd ska din assistent använda?"
        />
        <div className="relative px-6 mt-6">
          <div className="absolute flex justify-between left-2 w-full -top-7">
            <p className="text-xs -ml-1.5">Lättsvenska</p>
            <p className="text-xs -ml-5">Standard</p>
            <p className="text-xs mr-2.5">Komplex</p>
          </div>
          <Controller
            control={control}
            name="vocabularyLevel"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <RangeSlider
                onChange={(values) => {
                  onChange(values[0]);
                }}
                values={[value]}
              />
            )}
          />
          <div className="w-full text-center">
            <p className="text-sm">
              {getVocabularyText(watch("vocabularyLevel"))}
            </p>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div className="relative z-20">
        <Title icon={<Translate size={20} />} text="Välja ett hjälpspråk" />
        <Controller
          control={control}
          name="selectedLanguage"
          render={({ field: { onChange, value } }) => (
            <Dropdown
              items={LANGUAGES.filter(
                (language) => language.language !== value.language,
              )}
              selectedItem={value}
              setSelectedItem={onChange}
            />
          )}
        />
      </div>
      <div className="h-0.5 bg-borderPrimary my-5" />
      <div>
        <Title icon={<LightbulbFilament size={20} />} text="Anpassade ämnen" />
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("passed");
            if (!isValidPreference) return;
            if (watch("otherPreferences").includes(inputText)) return;
            setValue(
              "otherPreferences",
              [...watch("otherPreferences"), inputText],
              { shouldValidate: true, shouldDirty: true },
            );
            setInputText("");
          }}
        >
          <div className="relative">
            <InputText
              placeholder="Lägg till ett anpassat ämne"
              className="!h-9"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              value={inputText}
            />

            <Button.Icon disabled={!isValidPreference}>
              <Plus weight="bold" size={14} className="text-basePrimary" />
            </Button.Icon>
          </div>
        </form>
        <div className="flex flex-wrap gap-2 mt-3">
          {watch("otherPreferences").map((pref) => (
            <SelectableBadge
              key={pref}
              selected={true}
              onChange={(e) => {
                setValue(
                  "otherPreferences",
                  watch("otherPreferences").filter((p) => p !== pref),
                  { shouldValidate: true, shouldDirty: true }, // Ensure validation and dirty state update
                );
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
          disabled={!isDirty || !isValid}
          className="w-full"
          onClick={async () => {
            await handleSubmit(onSubmit)();
          }}
        >
          Spara
        </Button.Primary>
      </div>
    </div>
  );
};

export default SettingsForm;
