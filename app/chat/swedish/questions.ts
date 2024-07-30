export const SwedishQuestions = [
  {
    input: "create a text about swedish weather",
    output: `Sverige upplever olika väderförhållanden under året. Under vintermånaderna, särskilt i de norra regionerna, täcks landet av snö och skapar en naturskön vintermiljö. Temperaturerna kan sjunka avsevärt, ofta under fryspunkten, vilket gör det idealiskt för vintersport som skidåkning och skridskoåkning.

    På våren, när snön smälter, vaknar Sverige till liv med blomstrande blommor och frodig grönska. Sommaren bjuder på behagliga, milda temperaturer, och många svenskar njuter av utomhusaktiviteter och långa dagar med mycket dagsljus. Det är en utmärkt tid för vandring, cykling och att utforska landets vackra landskap.

    Hösten målar Sverige i levande färger när löven ändrar färg och den krispiga luften antyder den kommande vintern. Nederbörden är relativt jämnt fördelad under året med sporadiska sommarskurar.

    Sammanfattningsvis erbjuder Sveriges väder en unik charm under varje säsong, vilket gör det till en destination som är värd att besöka året om.`,
  },
  {
    input: "text about differences between portugal and sweden",
    output: `Portugal ligger i södra Europa och har varma, soliga somrar och milda vintrar. Sverige å andra sidan ligger i norra Europa och har en blandning av kalla vintrar med snö och milda somrar med mycket dagsljus.

    Portugal är känt för sin historia av utforskning, vilket har påverkat dess mat och språk. Sverige är känt för sin design och innovation, vilket gör det modernt och enkelt.

    Portugisisk mat handlar om skaldjur, bakverk som pastéis de nata och en rätt som kallas bacalhau (saltad torsk). I Sverige hittar du saker som köttbullar, sill och en traditionell buffé som kallas smörgåsbord.

    Portugisiska är Portugals språk, medan svenska är Sveriges språk. De tillhör olika språkfamiljer, med portugisiska som liknar andra romanska språk och svenska som liknar andra germanska språk.

    I Portugal tar människor det lugnt och tar ibland tupplurar (siestas). I Sverige är saker mer organiserade och människor balanserar arbete och liv väl, med bra stöd från regeringen.`,
  },
  {
    input: "can you create sentences about swedish food",
    output: `
    1. Svensk mat innehåller ofta tröstande och hjärtliga rätter, perfekt för de kalla nordiska vintrarna.
    2. En av de mest ikoniska svenska rätterna är köttbullar, vanligtvis serverade med lingonsås och krämig potatismos.
    3. Strömming är en grundpelare i det svenska köket och tillagas i olika smakrika marinader, såsom inlagd strömming och strömming i senapssås.
    4. Gravlax, tunt skivad lax som har lagrats med en blandning av socker, salt och dill, är en populär aptitretare i Sverige.
    5. Smörgåsbord, en traditionell svensk buffé, inkluderar lufttorkat kött, ostar och inlagda grönsaker.
    6. Rågbröd, känt som knäckebröd, är en vanlig tillbehör till många svenska måltider och toppas ofta med smör och ost.
    7. Surströmming, fermenterad strömming, är en smak som även svenskar förvärvar på grund av dess starka lukt och kraftiga smak.
    8. Svenska köket inkluderar också rätter som pyttipanna, en hash gjord av tärnad potatis, lök och olika köttsorter, oftast serverad med ett stekt ägg.
    9. När det kommer till sötsaker, njuter svenskar av fika, ett kaffepaus med godsaker som kanelbullar och mandeltårta.
    10. För en uppfriskande dryck, prova traditionell svensk snaps eller akvavit, ofta konsumerad under festliga tillställningar och firanden.
    `,
  },
  {
    input: "hey. create a text about french cusine",
    output: `Fransk matlagning, även känd som "haute cuisine," är berömd över hela världen för sin elegans och sofistikation. Den kännetecknas av användningen av högkvalitativa ingredienser och noggranna förberedningstekniker. Franska rätter präglas ofta av rika smaker och komplexa såser. Några ikoniska franska rätter inkluderar coq au vin, bœuf bourguignon och ratatouille. Fransk matlagning är också känd för sina bakverk, som croissanter, macarons och crème brûlée. Det är en sann hyllning till kulinarisk konst.`,
  },
  {
    input: "fix grammar:  Jag vill var en stort bilen i framtiden",
    output: "Jag vill ha en stort bilen i framtiden",
  },
  {
    input: "Correct grammar: Jag vill ha en stort bilen i framtiden",
    output: "Din mening är korrekt! Bra jobbet :)",
  },
  {
    input: "Create 10 questions",
    output:
      "1. Vilken typ av filmer är din favorit och vilka film gillar du mest?\n 2. Vad var sista bok som läste du? \n3. Kan du spela ett musikinstrument?\n 4. Brukade du att ställa till problem när du var i skolan? \n5. Finns det många sjöar i Ukraina?\n 6. Hur hamnade du i Sverige? \n7. Vilken sak sakna du mest från Sverige?\n 8. Hände med dig några roliga situationer när du pratade svenska?\n 9. Hur mycket tid spenderade du för att lära sig svenska?\n 10. Föredrar du att besöka stranden eller fjällar? \n11. Var är nästa ställe du kommer att besöka?",
  },
];

const translateVegetables = (language: string) => {
  const translations = {
    english: { language: "engelska", word: "vegetables" },
    portuguese: { language: "portugisiska", word: "vegetais" },
    finnish: { language: "finska", word: "vegetaali" },
    norwegian: { language: "norska", word: "vegetabler" },
    russian: { language: "ryska", word: "вегетарианские" },
    danish: { language: "danska", word: "vegetabler" },
    german: { language: "tyska", word: "vegetarische" },
    spanish: { language: "spanska", word: "vegetales" },
    arabic: { language: "arabiska", word: "الخضار" },
    polish: { language: "polska", word: "warzywa" },
    chinese: { language: "kinesiska", word: "蔬菜" },
    hindi: { language: "hindi", word: "विज़ड़े" },
    greek: { language: "grekiska", word: "φυτούρια" },
  };

  const currentLanguage = language.toLowerCase();
  return translations[currentLanguage] || translations.english;
};

export const SwedishQuestionsPrompt = ({ language }) => {
  const { word: translatedWord, language: translatedLanguageName } =
    translateVegetables(language);

  const newPrompt = {
    input: "vad betyder grönsaker?",
    output: `"Grönsaker" betyder "${translatedWord}" på ${translatedLanguageName}.

Här är några exempel på användningen av ordet "Grönsaker":

1. Restaurangen serverar färska grönsaker.
2. Vi handlade grönsaker på marknaden.
3. Jag äter alltid en sallad med olika grönsaker till lunch.
4. Mina barn älskar att äta grönsaker som morötter och potatisar.
`,
  };

  return SwedishQuestions.concat(newPrompt);
};
