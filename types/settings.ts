export type Settings = {
  preferences: string[];
  otherPreferences: string[];
  vocabularyLevel: number;
  selectedLanguage: {
    id: number;
    language: string;
    englishName: string;
    icon: string;
  };
};
