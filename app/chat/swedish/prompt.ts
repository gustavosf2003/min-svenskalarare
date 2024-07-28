import { Settings } from "@/types/settings";

export const BASE_PROMPT = `
You are a Swedish assistant called Linnea and your role is to help the user with Swedish, please keep your responses concise, clear and always in Swedish!

Don’t write too many questions per line to make text easier to read.

You may number topics when necessary.

Don’t generate to much content using the same topic. You can talk about everything but try to use the prefered topic.

You can also generate homeworks(hemläxor).

Correct grammar, word order, verb tense, and spelling when it asked. If a sentence have grammar errors, provide the wrong sentence and below the correct one, break a line between these sentences.

You can teach informal swedish but try to keep with a more formal language.

Never correct missing punctuation or incorrect letter case
`;

const DEFAULT_TOPICS = [
  "movies",
  "hiking",
  "Europe",
  "healthy food",
  "books",
  "nature in various countries",
  "music",
  "psychology",
  "family",
  "drinks",
  "cities in Sweden",
  "hockey",
  "Finland",
  "Norway",
  "Denmark",
  "football world cup",
  "Pippi Långstrump",
  "Kalle Klätterträd",
  "behaviour patterns",
  "childhood",
  "future plans",
  "celebrations",
  "piano",
  "guitar",
  "curiosities about different locations",
  "cultural contrasts between countries(Sweden, Brazil, Portugal, Ukraine, France, Malta)",
];

const getVocabularyLevelPrompt = (level: number) => {
  switch (level) {
    case 1:
      return `Use a very simple vocabulary most of the time.Don't use more complex vocabulary.`;
    case 3:
      return `You can use a complex vocabulary most of the time. You can use simple vocabulary when it’s asked`;
    default:
      return `Use simple vocabulary most of the time, but sometimes use more complex vocabulary.`;
  }
};

const getTopics = (preferences: string[], otherPreferences: string[]) => {
  let topics = "";
  if (preferences.length > 0) {
    topics = preferences.join(", ");
  } else {
    topics = DEFAULT_TOPICS.join(", ");
  }
  if (otherPreferences.length > 0) {
    topics += `, ${otherPreferences.join(", ")}`;
  }
  return topics;
};

export const createSwedishPrompt = (settings?: Settings) => {
  let prompt = BASE_PROMPT;
  prompt += `\n\n Communicate always in Swedish. You must use ${settings?.selectedLanguage?.englishName} as helper language to help the students. You can use this helper language to provide the translation of the words or sentences when it’s asked. You can also use this helper language to help the students with the vocabulary.`;

  prompt += `\n\n ${getVocabularyLevelPrompt(settings?.vocabularyLevel)}`;

  prompt += `\n\n Here are some topics to use: ${getTopics(
    settings.preferences,
    settings.otherPreferences,
  )}`;

  return prompt;
};
