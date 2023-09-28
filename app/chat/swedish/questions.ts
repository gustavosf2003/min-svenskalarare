export const SwedishQuestions = [
  {
    input: "give me some verbs in swedish",
    output: `| Engelska              | Present  | Preteritum | Supinum |
|-----------------------|----------|------------|---------|
| To eat                | Att äta  | äter       | åt      | ätit    |
| To sleep              | Att sova | sover      | sov     | sovit   |
| To consider, think    | Att tänka | tänker    | tänkte  | tänkt   |
|                       | Att fundera | funderar | funderade | funderat |
| To change             | Att byta | byter      | bytte   | bytt    |
|                       | Att ändra | ändrar    | ändrade | ändrat  |
| To move               | Att flytta | flyttar   | flyttade | flyttat |
| To bloom              | Att blomma | blommar  | blommade | blommat |
| To show               | Att visa | visar      | visade  | visat   |
| To see                | Att se   | ser        | såg     |         |
    `,
  },
  {
    input: "give me 12 verbs in Swedish",
    output: `| Infinitiv   | Presens   | Preteritum | Supinum    |
|-------------|-----------|------------|------------|
| att börja   | börjar    | började    | har börjat |
| att försöka | försöker  | försökte   | har försökt |
| att hinna   | hinner    | hann       | har hunnit |
| att låtsas  | låtsas    | låtsades   | har låtsats |
| att tänka   | tänker    | tänkte     | har tänkt  |
| att orka    | orkar     | orkade     | har orkat  |
| att råka    | råkar     | råkade     | har råkat  |
| att slippa  | slippur   | slapp      | har sluppit |
| att sluta   | slutar    | slutade    | har slutat  |
| att verka   | verkar    | verkade    | har verkat  |
| att våga    | vågar     | vågade     | har vågat  |
      `,
  },
  {
    input: "give me verbs with English translation",
    output: `| Engelska       | Infinitiv   | Present  | Preteritum | Supinum  |
|----------------|-------------|----------|------------|----------|
| To allow       | Att låta    | låter    | lät        | låtit    |
| To ask         | Att be      | ber      | bad        | bett     |
| To invite      | Att bjuda   | bjuder   | bjöd       | bjudit   |
| To interfere   | Att avbryta | avbryter | avbröt     | avbrutit |
| To give        | Att ge      | ger      | gav        | gett     |
| To take        | Att ta      | tar      | tog        | tagit    |
| To send        | Att skicka  | skickar  | skickade   | skickat  |
| To cancel (the booking) | Att avboka | avbokar | avbokade | avbokat |
| To work        | Att arbeta  | arbetar  | arbetade   | arbetat  |
| To fly         | Att flyga   | flyger   | flög       | flugit   |
| To buy         | Att köpa    | köper    | köpte      | köpt     |
| To go (fly, take the bus) | Att åka | åker     | åkte       | åkt      |
| To go (walk)  | Att gå      | går      | gick       | gått     |
      `,
  },
  {
    input:
      "create a table with the following verbs and translation: äter,sover,tänker,funderar,byter,ändrar,flyttar,blommar,visar,ser",
    output: `| Engelska              | Present  | Preteritum | Supinum |
|-----------------------|----------|------------|---------|
| To eat                | Att äta  | äter       | åt      | ätit    |
| To sleep              | Att sova | sover      | sov     | sovit   |
| To consider, think    | Att tänka | tänker    | tänkte  | tänkt   |
|                       | Att fundera | funderar | funderade | funderat |
| To change             | Att byta | byter      | bytte   | bytt    |
|                       | Att ändra | ändrar    | ändrade | ändrat  |
| To move               | Att flytta | flyttar   | flyttade | flyttat |
| To bloom              | Att blomma | blommar  | blommade | blommat |
| To show               | Att visa | visar      | visade  | visat   |
| To see                | Att se   | ser        | såg     |         |
      `,
  },
  {
    input: "create a table with random nouns and translation",
    output: `| Engelska         | Obestämd       | Bestämd     | Plural   | Bestämd Plural |
| ---------------- | -------------- | ----------- | -------- | --------------- |
| Wedding          | Ett bröllop     | bröllopet   | bröllopen | bröllopen       |
| Place            | En plats        | platsen     | platser  | platserna       |
| A piano          | Ett piano       | pianot      | pianon   | pianona         |
| A community      | Ett samhälle    | samhället  | samhällen | samhällena      |
| Visit            | Ett besök       | besöket     | besök    | besöken         |
| Season           | En årstid       | årstiden   | årstider | årstiderna      |
| A picture        | En bild         | bilden     | bilder   | bilderna        |
| A flower         | En blomma       | blomman    | blommor  | blommorna       |
| An apple         | Ett äpple       | äpplet     | äpplen   | äpplena         |
| A knee           | Ett knä         | knät/knäet | knän     | knäna           |
| Colour           | En färg         | färgen     | färger   | färgerna        |
      `,
  },
  {
    input: "table with 15 nouns",
    output: `| Engelska     | Obestämd     | Bestämd   | Plural   | Bestämd Plural |
|--------------|--------------|-----------|----------|-----------------|
| A home       | Ett hem      | hemmet    | hem      | hemmen          |
| A pen        | En penna     | pennan    | pennor   | pennorna        |
| A school     | En skola     | skolan    | skolor   | skolorna        |
| A person     | En människa  | människan | människor | människorna     |
| A girl       | En flicka    | flickan   | flickor  | flickorna       |
| A Swede      | En svensk    | svensken  | svenskar | svenskarna      |
| A bag        | En väska     | väskan    | väskor   | väskorna        |
| A problem    | Ett problem  | problemet | problem  | problemen       |
| A year       | Ett år       | året     | år       | åren            |
| A teacher    | En lärare    | läraren  | lärare   | lärarna         |
| A boy        | En pojke     | pojken   | pojkar   | pojkarna        |
| A kitchen    | Ett kök      | köket    | kök      | köken           |
| A country    | Ett land     | landet   | länder   | länderna        |
| A trip       | En resa      | resan    | resor    | resorna         |
| A flower     | En blomma    | blomman  | blommor  | blommorna       |
      `,
  },
  {
    input: "give me some nouns about House:",
    output: `| Engelska       | Obestämd    | Bestämd     | Plural     | Bestämd Plural |
| -------------- | ----------- | ----------- | ---------- | --------------- |
| A house        | Ett hus     | huset       | hus        | husen           |
| A door         | En dörr     | dörren      | dörrar     | dörrarna        |
| A window       | Ett fönster | fönstret    | fönster    | fönstren        |
| A roof         | Ett tak     | taket       | tak        | taken           |
| A staircase    | En trappa   | trappan     | trappor    | trapporna       |
| A room         | Ett rum     | rummet      | rum        | rummen          |
| A bedroom      | En sovrum   | sovrummet   | sovrum     | sovrummen       |
| A living room  | Ett vardagsrum | vardagsrummet | vardagsrum | vardagsrummen |

      `,
  },
  {
    input: "vad betyder grönsaker?",
    output: `**"Grönsaker"** betyder "vegetables".

Här är några exempel på användningen av ordet **"Grönsaker"**:

    1. Restaurangen serverar färska grönsaker.
    2. Vi handlade grönsaker på marknaden.
    3. Jag äter alltid en sallad med olika grönsaker till lunch.
    4. Mina barn älskar att äta grönsaker som morötter och potatisar.

| Obestämd  | Bestämd  | Plural | Bestämd Plural |
|------------|----------|------------|-----------------|
| en grönsak | grönsaken  | grönsaker   | grönsakerna     |
    `,
  },
  {
    input: "what is the meaning of skicka",
    output: `**"Skickar"** betyder "send".

| Infinitiv  | Present  | Past     | Perfect    |
|------------|----------|----------|------------|
| Att skicka | skickar  | skickade | har skickat |

Här är några exempel på användningen av ordet **"skickar"**:

      1. Jag ska skicka en e-mail till min vän.
      2. Kan du skicka mig en meddelande?
      3. De skickade ett vykort från sin semestertur.
      4. Jag ska skicka ett brev.
      5. De har skickat ett kort till mig.`,
  },
  {
    input: "how can I say sleep in Swedish",
    output: `På svenska är ordet för "sleep" **"sova"**.

| Infinitiv  | Present  | Preteritum | Perfekt  |
|------------|----------|------------|----------|
| Att sova   | sover    | sov        | har sovit |

Exempel:

      1. Jag ska sova tidigt ikväll.
      2. Hon sover gott på natten.
      3. Vi sov länge på lördagsmorgonen.
      4. Barnen har redan sovit en timme.
      `,
  },
  {
    input: "word for visit",
    output: `Översättningen till ordet är **"besök"**.

| Infinitiv  | Present  | Preteritum | Perfekt  |
|------------|----------|------------|----------|
| Att besöka | besöker  | besökte    | har besökt |

Exempel:

                1. Jag ska besöka mina föräldrar i São Paulo.
                2. Barnen vill besöka Lissabon på lördag.
                3. Hon har besökt flera länder runt om i världen.
                4. Vi besökte en vacker gammal stad under semestern.
                `,
  },
  {
    input: "how can I say Wedding",
    output: `På svenska säger man **"bröllop"**.

| Obestämd    | Bestämd     | Plural     | Bestämd Plural |
| ----------- | ----------- | ---------- | --------------- |
| Ett bröllop | bröllopet   | bröllop    | bröllopen       |

Exempel:

      1. De planerar sitt bröllop i en vacker kyrka.
      2. De har inbjudit släkt och vänner till sitt bröllop.
      3. Bröllopet var vackert och roligt.
      4. Alla var glada på bröllopet.
      `,
  },
  {
    input: "årstid",
    output: `**"Årstid"** betyder **"season"**.

| Obestämd  | Bestämd   | Plural     | Bestämd Plural |
| --------- | --------- | ---------- | --------------- |
| En årstid | årstiden  | årstider   | årstiderna      |

Exempel:

      1. Vi har fyra årstider i Sverige: vår, sommar, höst och vinter.
      2. Årstiderna i Ukraina och Portugal är mycket olika.
      3. Min favoritårstid är sommaren eftersom det är varmt och soligt.
      `,
  },
  {
    input: "bild",
    output: `**"Bild"** betyder **"picture"**.

    | Obestämd | Bestämd  | Plural   | Bestämd Plural |
    | ---------| ---------| ---------| --------------- |
    | En bild   | bilden   | bilder   | bilderna        |

    Exempel:

                1. Vi tittade på gamla familjebilder.
                2. Jag tog vackra bilder i Göteborg.
                3. Kan du ta en bild?`,
  },
  {
    input: "väskor",
    output: `**"väskor"** betyder **"bag"** eller **"suit cases"** .

    | Obestämd | Bestämd  | Plural   | Bestämd Plural |
    | ---------| ---------| ---------| --------------- |
    | En väska   | väskan   | väskor   | väskorna        |

    Exempel:

                1. De har många väskor
                2. Jag såg flera väskor i butiken
                3. Väskan är svart`,
  },
  {
    input: "pratar",
    output: `**"Pratar"** betyder **"talk"**.

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att prata  | pratar  | pratade    | har pratat |

Exempel:

      1. Vi pratade om våra resor under lunchen.
      2. Hon har pratat ukrainska sedan hon var barn.
      3. Kan vi prata portugisiska?
      4. De pratar ofta om sina gemensamma intressen.
      `,
  },
  {
    input: "kastade",
    output: `**"Kastade"** betyder **"threw"**.

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att kasta  | kastar  | kastade    | har kastat |

Exempel:

      1. Jag ska kasta bollen till dig.
      2. Hon kastade stenen i sjön.
      3. Vi brukar kasta papper i återvinningen.
      `,
  },
  {
    input: "bjuda",
    output: `**"Bjuda"** betyder **"invite"**.

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att bjuda  | bjuder  | bjöd       | har bjudit |

Exempel:

      1. Jag bjuder dig på en kopp kaffe.
      2. Hon bjöd sina vänner på en tårta.
      3. De bjuder in släkten till middag på lördag.
      4. Har du blivit bjuden på någon fest nyligen?
      `,
  },
  {
    input: "att spela",
    output: `**"spela"** betyder **"play"**.

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att spela  | spelar  | spelade       | har spelat |

Exempel:

      1. Jag spelar gitarr
      2. Han spelade fotboll förra veckan
      3. De har spelat tennis i flera år
      4. Hon spelar piano
      `,
  },
  {
    input: "åt",
    output: `**"åt"** betyder **"ate"**.

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att äta  | äter  | åt       | har ätit |

Exempel:

      1. Jag äter frukost nu
      2. Igår åt vi pizza till middag
      3. Han åt en god tårta på sin födelsedag
      4. Jag har ätit sushi tidigare
      `,
  },
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
    input: "",
    output: "",
  },
  {
    input: "review my text:  Jag äter gurkor brevid jag tycker om grönsaker",
    output:
      "Jag äter gurkor **~~brevid~~** jag tycker om grönsaker  \n Jag äter gurkor **eftersom** jag tycker om grönsaker",
  },
  {
    input: "Jag äter gurkor brevid jag tycker om grönsaker",
    output:
      "Jag äter gurkor **~~brevid~~** jag tycker om grönsaker \n\n Jag äter gurkor **eftersom** jag tycker om grönsaker",
  },
  {
    input: "fix grammar:  Jag vill var en stort bilen i framtiden",
    output: "Jag vill **ha** en stort bilen i framtiden",
  },
  {
    input:
      "Correct grammar:  Jag vill lära mig svenska så kan jag flytande svenska",
    output: "Jag vill lära mig svenska **så att** jag kan flytande svenska",
  },
  {
    input: "Correct grammar: Jag vill ha en stort bilen i framtiden",
    output: "Din mening är korrekt! Bra jobbet :)",
  },
  {
    input: "review text:  Jag vill var en stort bilen i framtiden",
    output:
      "Jag vill **~~var~~** en stort bilen i framtiden \n\n Jag vill **ha** en stort bilen i framtiden \n\n“Var” means like “to be” in English It’s better to use “Ha” in this sentence because it means possession. Like “to have” in English Här är några exempel på “ha”: \n1. Jag **har** en hund 2. Vi **har** mycket att göra idag 3. **Har** du några frågor?",
  },
  {
    input: " Review grammar: Jag vill ha en boten i Brasilien",
    output: "Du har helt rätt! Bra jobbet 🤟",
  },
  {
    input: "Review text: Jag brukar att åka till Sverige",
    output:
      "Jag brukar **~~att~~** åka till Sverige \n\n Jag brukar åka till Sverige Ingen “att” after dem verber",
  },
  {
    input: "Review text: Jag behöver att ta mer sol",
    output:
      "Jag behöver att **~~ta mer sol~~** \n\nJag behöver att sola You should use “att sola” to express “take sun” in Swedish. Här är några exempel på att använda “att sola”:\n 1. Jag älskar att sola på stranden 2. Vi brukar sola på takterrassen(rooftop terrace) 3. Hon solade i trädgården hela eftermiddagen 4. De solade naken på nudiststranden",
  },
  {
    input: "Create 10 questions",
    output:
      "1. Vilken typ av filmer är din favorit och vilka film gillar du mest?\n 2. Vad var sista bok som läste du? \n3. Kan du spela ett musikinstrument?\n 4. Brukade du att ställa till problem när du var i skolan? \n5. Finns det många sjöar i Ukraina?\n 6. Hur hamnade du i Sverige? \n7. Vilken sak sakna du mest från Sverige?\n 8. Hände med dig några roliga situationer när du pratade svenska?\n 9. Hur mycket tid spenderade du för att lära sig svenska?\n 10. Föredrar du att besöka stranden eller fjällar? \n11. Var är nästa ställe du kommer att besöka?",
  },
  {
    input: "Give me 3 exercises to my students about Snow White",
    output:
      "Här är 3 frågor om Snow White Saga \n1. Vad tycker du om sagan Snövit?. Skriv ner dina tankar om berättelsen \n2. Varför kallades  Snövit för Snövit?\n 3.Beskriv den onda drottningen i Snövit, vilken personlighet har hon?",
  },
  {
    input: "Varför och hur jag lär mig svenska?",
    output: "Varför och hur **lär jag mig** svenska?",
  },
  {
    input:
      "Review text: Idag tittade jag på en fortfarande svensk film som heter “Sámi blood”. Det är en film om en Sami flicka och det film visar fördomar mot Sami människor.",
    output:
      "Det finns några fel i din text: \nIdag tittade jag på en **~~fortfarande~~** svensk film **som heter “Sámi blood”**. **Det är en film om** en Sami flicka och det film visar fördomar mot Sami människor. **Korrekt text**: Idag tittade jag på en svensk film. **Den heter “Sámi blood”**. **Filmen handlar om** en Sami flicka och det film visar f ördomar mot Sami människor. ** \n\n **fortfarande** means “Still” so didn’t make sense to use in that sentence Här är några exempel på att använda **fortfarande**:\n 1. Jag är fortfarande trött. 2. Har du fortfarande inte ätit? 3. Han är fortfarande på jobbet 4. Barnen leker fortfarande i parken",
  },
];
