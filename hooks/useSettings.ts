import { useEffect, useState } from "react";

import { Settings } from "@/types/settings";
import { LANGUAGES } from "@/utils/settings";

export const useSettings = () => {
  const [settings, setSettings] = useState({
    preferences: [],
    otherPreferences: [],
    vocabularyLevel: 2,
    selectedLanguage: LANGUAGES[0],
  });
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const getSettings = async () => {
    const storedSettings = await getLocalStorage("settings");
    if (storedSettings) {
      setSettings(storedSettings);
    }
    setIsLoading(false); // Set loading to false after settings are fetched
  };

  useEffect(() => {
    getSettings();
  }, []);

  const saveSettings = async (toSaveSettings: Settings): Promise<void> => {
    await setLocalStorage("settings", toSaveSettings);
  };

  return {
    data: { ...settings } as Settings,
    saveSettings,
    isLoading,
  };
};

const getLocalStorage = async (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const setLocalStorage = async (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};
