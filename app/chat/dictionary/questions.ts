export const dictionaryQuestions = [
  {
    input: "give me 12 verbs",
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
    output: `"Grönsaker" betyder "vegetables".

Här är några exempel på användningen av ordet "Grönsaker":

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
    output: `"Skickar" betyder "send".

| Infinitiv  | Present  | Past     | Perfect    |
|------------|----------|----------|------------|
| Att skicka | skickar  | skickade | har skickat |

Här är några exempel på användningen av ordet "skickar":

      1. Jag ska skicka en e-mail till min vän.
      2. Kan du skicka mig en meddelande?
      3. De skickade ett vykort från sin semestertur.
      4. Jag ska skicka ett brev.
      5. De har skickat ett kort till mig.`,
  },
  {
    input: "how can I say sleep in Swedish",
    output: `På svenska är ordet för "sleep" "sova".

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
    output: `Översättningen till ordet är "besök".

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
    output: `På svenska säger man "bröllop".

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
    output: `"Årstid" betyder "season".

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
    output: `"Bild" betyder "picture".

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
    output: `"väskor" betyder "bag" eller "suit cases" .

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
    output: `"Pratar" betyder "talk".

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
    output: `"Kastade" betyder "threw".

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
    input: "att spela",
    output: `"spela" betyder "play".

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
    output: `"åt" betyder "ate".

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
    input: "pratat",
    output: `"pratat" betyder "have talked".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att prata  | pratar  | pratade       | har pratat |

Exempel:

      1. Jag har pratat med min vän.
      2. Hon har pratat i telefon i timmar.
      3. De hade pratat om resan.
      4. Vi pratade med läraren.
      `,
  },
  {
    input: "har druckit",
    output: `"har druckit" betyder "have drunk".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att dricka  | dricker  | drack       | har druckit |

Exempel:

      1. Jag har druckit kaffe på morgonen.
      2. Hon har druckit vatten hela dagen.
      3. De hade druckit te tillsammans.
      4. Vi har druckit läsk på festen.
      `,
  },
  {
    input: "målade",
    output: `"målade" betyder "painted".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att måla  | målar  |  målade  | har målat |

Exempel:

      1. Jag målar en tavla.
      2. Hon älskar att måla landskap.
      3. Vi målade huset förra sommaren.
      `,
  },
  {
    input: "sjöng",
    output: `"sjöng" betyder "sang".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att sjunga  | sjunger  | sjöng   | har sjungit |

Exempel:

      1. Barnen sjöng glatt på skolavslutningen
      2. Hon sjunger vackert.
      3. Jag sjunger en sång.
      `,
  },
  {
    input: "gå",
    output: `"gå" betyder "go" eller "walk".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att gå  | går  | gick   | har gått |

Exempel:

      1. Jag går till skolan varje morgon.
      2. Vi gick en lång promenad i parken igår.
      3. Hon gick försiktigt på den hala isen.
      `,
  },
  {
    input: "ska",
    output: `"ska" betyder "will".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att skola  | ska  | skulle   | har skolat |

Exempel:

      1. Det ska regna imorgon.
      2. Vi ska resa till Paris i sommar.
      3. Jag ska träffa dig imorgon
      `,
  },
  {
    input: "meaming of tittade",
    output: `"tittade" betyder "looked".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att titta  | tittar  | tittade   | har tittat |

Exempel:

      1. Jag tittar på TV.
      2. Han tittade ut genom fönstret.
      3. Vi ska titta på den nya filmen ikväll.
      `,
  },
  {
    input: "dansat",
    output: `"dansat" betyder "have danced".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att dansa  | dansar  | dansade   | har dansat |

Exempel:

      1. Jag dansar på festen ikväll.
      2. De dansade tillsammans hela natten.
      3. Hon älskar att dansa balett.
      `,
  },
  {
    input: "leka",
    output: `"leka" betyder "play".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att leka  | leker  | lekte   | har lekt |

Exempel:

      1. Barnen leker i parken.
      2. Vi brukade leka gömme när vi var små.
      3. Katten älskar att leka med sin leksaksmus.
      `,
  },
  {
    input: "skrattar",
    output: `"skrattar" betyder "to laugh".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att skratta  | skrattar  | skrattade   | har skrattat |

Exempel:

      1. Vi skrattar åt skämtet.
      2. Barnen skrattade högt när de såg clownen.
      3. Hon skrattar alltid när hon är glad.
      `,
  },
  {
    input: "avlider",
    output: `"avlider" betyder "pass away".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att avlida  | avlider  | avled   | har avlidit |

Exempel:

      1. Min farfar avled i en ålder av 92 år.
      2. Trots att läkarna gjorde allt de kunde, avled patienten under natten.
      3. Han avled fridfullt i sitt hem omgiven av sina nära och kära.
      `,
  },
  {
    input: "Skända",
    output: `"skända" betyder "to defile".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att skända  | skändar  | skändade   | har skändat |

Exempel:

      1. Han skändade boken genom att riva ut sidorna.
      2. Tjuven skändade kyrkans ingång genom att klottra på väggarna.
      3. Att skända en minnesplats är respektlöst.
      `,
  },
  {
    input: "Försmå",
    output: `"Försmå" betyder "to scorn".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att försmå  | försmår  | försmådde   | har försmått  |

Exempel:

      1. Han försmådde hennes vänförfrågan på sociala medier.
      2. Det är viktigt att inte försmå andra människor på grund av deras åsikter
      3. Hon försmådde hans förslag att dela med sig av sina leksaker.
      `,
  },
  {
    input: "plundrat",
    output: `"plundrat" betyder "plundered".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att plundra  | plundrar  | plundrade   | har pluntrat  |

Exempel:

      1. Piraterna plundrade handelsfartyget och stal dess last.
      2. Under oroligheterna plundrades flera affärer och butiker i staden.
      3. Efter erövringen plundrade soldaterna staden och tog med sig värdefulla skatter.
      `,
  },
  {
    input: "slutade",
    output: `"slutade" betyder "finished".

| Infinitiv  | Present | Preteritum | Perfekt   |
| ---------- | ------- | ---------- | --------- |
| Att sluta  | slutar  | slutade   | har slutat  |

Exempel:

      1. Jag slutade jobbet igår.
      2. Hon slutade sjunga när publiken applåderade.
      3. Vi slutade äta socker för att bli friskare.
      `,
  },

  //  ===================  OTHER WORDS ======================//

  {
    input: "för att",
    output: `"För att" används som en sammansatt konjunktion i svenskan. Det kan översättas till engelska som "in order to" eller "to"..

Exempel:

      1. Han läste böcker för att lära sig mer
      2. Jag går till affären för att köpa mjölk
      3. Hon tränar varje dag för att bli starkare.
      `,
  },
  {
    input: "trots att",
    output: `"Trots att" betyder "even though" eller "although" på engelska. Det används för att visa att något är sant eller händer, trots en motståndande faktor eller hinder.

Exempel:

      1. Han läste böcker för att lära sig mer
      2. Jag går till affären för att köpa mjölk
      3. Hon tränar varje dag för att bli starkare.
      `,
  },
  {
    input: "eftersom",
    output: `Uttrycket "eftersom" på svenska används för att ange en orsak eller förklaring till något som händer eller är sant. Det kan översättas till engelska som "because," "since," eller "as."

Exempel:

      1. Jag gick inte till jobbet idag, eftersom jag är sjuk.
      2. Eftersom det regnar ute, tar jag med mig ett paraply.
      3. Jag tycker om att läsa, eftersom det hjälper mig att slappna av.
      `,
  },
  {
    input: "ibland",
    output: `"ibland" är en adverb som används för att beskriva att något händer, sker, eller förekommer med viss frekvens, men inte hela tiden. "Ibland" betyder "sometimes"

Exempel:

      1. Jag träffar mina vänner ibland, men vi är alla upptagna med olika saker.
      2. Ibland äter vi pizza till middag när vi inte känner för att laga mat.
      3. Jag går ibland till gymmet för att träna.
      `,
  },
  {
    input: "trolligtvis",
    output: `Ordet "troligtvis" används för att ange en hög grad av sannolikhet eller att något är troligt att hända. Det används för att indikera att något är sannolikt att inträffa eller är sant. "Trolligtvis" betyder "probably" eller "likely" på engelska.

Exempel:

      1. Det kommer troligtvis att regna imorgon.
      2. Hon kommer troligtvis att komma till festen.
      3. Vi kommer troligtvis att åka till Spanien i sommar.
      `,
  },
  {
    input: "kanske",
    output: `"Kanske" används för att ange en möjlighet eller att något är möjligt att hända. "Kanske" betyder "maybe" eller "perhaps"

Exampel:

      1. Jag kommer kanske att åka till Stockholm i sommar.
      2. Hon kanske kommer till festen.
      3. Vi kanske kommer att åka till Portugal i sommar.
    `,
  },
  {
    input: "mycket",
    output: `"Mycket" är ett adverb som används för att beskriva en hög grad av något. "Mycket" betyder "very"

Exempel:

      1. Jag är mycket trött.
      2. Hon är mycket glad.
      3. Vi är mycket hungriga.`,
  },
  {
    input: "lite",
    output: `"Lite" är ett adverb som används för att beskriva en låg grad av något. "Lite" betyder "a little" eller "a bit"

Exempel:

      1. Jag är lite trött.
      2. Hon är lite glad.
      3. Vi är lite hungriga.`,
  },
  {
    input: "mycket",
    output: `"Mycket" är ett adverb som används för att beskriva en hög grad av något. "Mycket" betyder "very".

Exempel:

    1. Jag är mycket trött.
    2. Hon är mycket glad.
    3. Vi är mycket hungriga.`,
  },
  {
    input: "lite",
    output: `"Lite" är ett adverb som används för att beskriva en låg grad av något. "Lite" betyder "a little" eller "a bit".

Exempel:

    1. Jag är lite trött.
    2. Hon är något glad.
    3. Vi är en smula hungriga.`,
  },
  {
    input: "något",
    output: `"Något" är ett adverb som används för att beskriva en låg grad av något. "Något" betyder "something".

Exempel:

    1. Jag är något trött.
    2. Hon känner sig något glad.
    3. Vi är något hungriga.`,
  },
  {
    input: "någon",
    output: `"Någon" är ett pronomen som används för att hänvisa till en person. "Någon" betyder "someone".

Exempel:

    1. Jag är någon trött.
    2. Hon är någon glad.
    3. Vi har någon hungrig i vår grupp.`,
  },
  {
    input: "några",
    output: `"Några" är ett pronomen som används för att hänvisa till ett antal saker eller personer. "Några" betyder "some".

Exempel:

    1. Jag har några böcker.
    2. Hon träffade några vänner.
    3. Vi har några äpplen.`,
  },
  {
    input: "alltid",
    output: `"Alltid" är ett adverb som används för att beskriva något som händer i varje situation eller utan undantag. "Alltid" betyder "always".

Exempel:

    1. Jag är alltid trött på morgonen.
    2. Hon är alltid glad att hjälpa till.
    3. Vi är alltid hungriga efter träningen.`,
  },
  {
    input: "aldrig",
    output: `"Aldrig" är ett adverb som används för att beskriva frånvaron av något som inte händer vid någon tidpunkt. "Aldrig" betyder "never".

Exempel:

    1. Jag är aldrig trött på semestern.
    2. Hon har aldrig varit i Paris.
    3. Vi har aldrig ätit sushi.`,
  },
  {
    input: "ofta",
    output: `"Ofta" är ett adverb som används för att beskriva något som sker med frekvens eller regelbundenhet. "Ofta" betyder "often".

Exempel:

    1. Jag äter ofta frukt till frukost.
    2. Hon går ofta till gymmet.
    3. Vi träffas ofta på helgerna.`,
  },
  {
    input: "sällan",
    output: `"Sällan" är ett adverb som används för att beskriva något som händer med låg frekvens eller oregelbundet. "Sällan" betyder "rarely".

Exempel:

    1. Jag äter sällan godis.
    2. Hon reser sällan utomlands.
    3. Vi har sällan tid att titta på TV.`,
  },
  {
    input: "snart",
    output: `"Snart" är ett adverb som används för att beskriva något som kommer att hända inom en kort tidsram. "Snart" betyder "soon".

Exempel:

    1. Jag kommer snart tillbaka.
    2. Hon ska snart börja sitt nya jobb.
    3. Vi ska snart äta middag.`,
  },
  {
    input: "ju",
    output: `"Ju" är en partikel som används för att understryka eller belysa en uppenbarhet eller ett faktum. "Ju" betonar en relation mellan två saker eller fakta. "Ju" kan översättas till "indeed" eller "as".

  Exempel:

    1. Ju tidigare du går, desto bättre.
    2. Ju mer du tränar, ju starkare blir du.
    3. Ju mer du läser, desto klokare blir du.`,
  },
  {
    input: "redan",
    output: `"Redan" är ett adverb som används för att beskriva att något har hänt eller börjat tidigare än förväntat. "Redan" betyder "already".

Exempel:

    1. Jag är redan klar med arbetet.
    2. Hon har redan ätit lunch.
    3. Vi har redan sett den filmen.`,
  },
  {
    input: "inte",
    output: `"Inte" är ett adverb som används för att ange negation eller motsatsen till något. "Inte" betyder "not".

Exempel:

    1. Jag är inte trött.
    2. Hon är inte hungrig.
    3. Vi är inte redo än.`,
  },

  // ==================== ADJECTIVES  ====================== //

  {
    input: "Artig",
    output: `Ordet "artig" på svenska betyder "polite" eller "well-mannered" på engelska.

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| artig  | artigt  | artiga   |


Exempel:

      1. Barnet tackade artigt för presenten.
      2. Hon var alltid artig och sa "snälla" och "tack."
      3. Under middagen var gästerna mycket artiga mot varandra.
      `,
  },
  {
    input: "Gulliga",
    output: `Ordet "gulliga" betyder "cute" eller "sweet".

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| gullig  | gulligt  | gulliga   |

Exempel:

      1. Barnet var gulligt när det sa "tack" till sin mamma.
      2. Hon hade en gullig hund som hette "Bella."
      3. Han hade en gullig flickvän som hette "Anna."
      `,
  },
  {
    input: "Vänlig",
    output: `Ordet "vänlig" betyder "friendly" eller "kind"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| vänlig  | vänligt  | vänliga   |

Exempel:

      1. Hon var en vänlig person som alltid hjälpte andra.
      2. Han var en vänlig granne som alltid hälsade på alla.
      3. De var vänliga mot varandra.
    `,
  },
  {
    input: "Snäll",
    output: `Ordet "snäll" betyder "kind" eller "nice"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| snäll  | snällt  | snälla   |

Exempel:

      1. Hon var en snäll person som alltid hjälpte andra.
      2. Han var en snäll granne som alltid hälsade på alla.
      3. De var snälla mot varandra.
      `,
  },
  {
    input: "Roliga",
    output: `Ordet "rolig" betyder "funny" eller "fun"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| rolig  | roligt  | roliga   |

Exempel:

      1. Hon var en rolig person som alltid skämtade.
      2. Han var en rolig granne som alltid skämtade.
      3. De var roliga mot varandra.
        `,
  },
  {
    input: "Intressant",
    output: `Ordet "intressant" betyder "interesting."

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| Intressant  | Intressant  | Intressanta   |

Exempel:

      1. Hon var en intressant person som alltid berättade intressanta historier.
      2. Han var en intressant granne som alltid berättade intressanta historier.
      3. De var intressanta mot varandra.
`,
  },
  {
    input: "Söt",
    output: `Ordet "söt" betyder "cute"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| söt  | sött  | söta   |

Exempel:

      1. Hon var en söt person som alltid skämtade.
      2. Han var en söt granne som alltid skämtade.
      3. De var söta mot varandra.
`,
  },
  {
    input: "Vackert",
    output: `Ordet "vackert" betyder "beautiful"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| vacker  | vackert  | vackra   |

Exempel:

      1. Hon var en vacker person som alltid skämtade.
      2. Han var en vacker granne som alltid skämtade.
      3. De var vackra mot varandra.
              `,
  },
  {
    input: "Snygg",
    output: `Ordet "snygg" betyder "handsome" eller "pretty"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| snygg  | snyggt  | snygga   |

Exempel:

      1. Hon var en snygg person som alltid skämtade.
      2. Han var en snygg granne som alltid skämtade.
      3. De var snygga mot varandra.
                `,
  },
  {
    input: "Dålig",
    output: `Ordet "dålig" betyder "bad"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| dålig  | dåligt  | dåliga   |

Exempel:

      1. Hon var en dålig person som alltid skämtade.
      2. Han var en dålig granne som alltid skämtade.
      3. De var dåliga mot varandra.
                    `,
  },
  {
    input: "Stark",
    output: `Ordet "stark" betyder "strong"

| Utrum | Neutrum | Plural   |
| ---------- | ------- | ---------- |
| stark  | starkt  | starka   |

Exempel:

      1. Hon var en stark person som alltid skämtade.
      2. Han var en stark granne som alltid skämtade.
      3. De var starka mot varandra.
`,
  },
  {
    input: "svårare",
    output: `Ordet "stark" betyder "stronger"

| Adjektiv | Komparativ | Superlativ   |
| ---------- | ------- | ---------- |
| Svår  | Svårare  | Svåraste   |

Exempel:

      1. Att lära sig ett nytt språk kan vara svårt
      2. Matteuppgifterna idag var svårare än de igår
      3. Tentamenen var den svåraste jag någonsin har gjort.
      `,
  },
  {
    input: "lättare",
    output: `Ordet "lätt" betyder "easier"

| Adjektiv | Komparativ | Superlativ   |
| ---------- | ------- | ---------- |
| Lätt  | Lättare  | Lättaste   |

Exempel:

      1. Att lära sig ett nytt språk kan vara lätt
      2. Matteuppgifterna idag var lättare än de igår
      3. Tentamenen var den lättaste jag någonsin har gjort.
  `,
  },
  {
    input: "roligare",
    output: `Ordet "rolig" betyder "funnier"

| Adjektiv | Komparativ | Superlativ   |
| ---------- | ------- | ---------- |
| Rolig  | Roligare  | Roligast   |

Exempel:

      1. Den tecknade serien är riktigt rolig
      2. Skämtet du berättade igår var roligare än det idag
      3. Den där sketchen på TV var den roligast jag sett på länge
  `,
  },
  {
    input: "roligast",
    output: `Ordet "rolig" betyder "funniest"

| Adjektiv | Komparativ | Superlativ   |
| ---------- | ------- | ---------- |
| Rolig  | Roligare  | Roligast   |

Exempel:

      1. Den tecknade serien är riktigt rolig
      2. Skämtet du berättade igår var roligare än det idag
      3. Den där sketchen på TV var den roligast jag sett på länge
    `,
  },
  {
    input: "allvarlig",
    output: `Ordet "allvarlig" betyder "serious"

| Adjektiv | Komparativ | Superlativ   |
| ---------- | ------- | ---------- |
| Allvarlig  | Mer allvarlig  | Mest allvarlig   |

Exempel:

      1. Det här fallet är mer allvarligt än det förra
      2. Detta är det mest allvarliga problemet vi någonsin har stött på
      3. De allvarliga fallen
    `,
  },
];
