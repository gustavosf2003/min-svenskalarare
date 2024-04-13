export type WordRequestType = {
  _shards: {
    failed: number;
    successful: number;
    total: number;
  };
  hits: {
    hits: {
      _id: string;
      _index: string;
      _score: null;
      _source: WordSourceType;
      _type: string;
      _version: number;
      sort: [number, string, string];
    }[];
    max_score: null;
    total: number;
  };
  searchedWord: string;
  timed_out: boolean;
  took: number;
};

export type WordSourceType = {
  FormRepresentations: {
    baseform: string;
    lemgram: string;
    paradigm: string;
    partOfSpeech: string;
  }[];
  WordForms: {
    msd: string;
    writtenForm: string;
  }[];
  lexiconName: string;
  lexiconOrder: string;
};
