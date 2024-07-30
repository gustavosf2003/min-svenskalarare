const InfoCard = () => {
  return (
    <div className="w-full p-4 overflow-y-auto rounded md:p-8 lg:overflow-hidden">
      <a href="https://github.com/gustavosf2003">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">
          🤖 AI Assistent
        </h1>
      </a>
      <ul>
        <li className="">
          👨‍🏫
          <span className="ml-2">
            Välkommen till Min Svenskalärare. Jag är Linnea, din virtuella
            svenskalärare!
          </span>
        </li>
        <li className="">
          🎨
          <span className="ml-2">
            Anpassa assistenten: Välj teman och ställ in assistenten efter dina
            önskemål.
          </span>
        </li>
        <li className="hidden md:block">
          📝
          <span className="ml-2">
            Skapa läxor: Linnea kan skapa läxor som passar din nivå.
          </span>
        </li>
        <li className="hidden md:block">
          🏋️‍♀️
          <span className="ml-2">
            Skapa övningar: Linnea kan skapa övningar för att förbättra dina
            svenskkunskaper, från ordquiz till verbövningar.
          </span>
        </li>
        <li className="hidden md:block">
          📖
          <span className="ml-2">
            Förbättra din läsning: Be om att läsa artiklar, dikter eller sagor
            på svenska. Artiklar finns fram till augusti 2021.
          </span>
        </li>
        <li className="hidden md:block">
          🌟
          <span className="ml-2">
            Fråga om vad som helst, från svenska traditioner till idiom.
          </span>
        </li>
        <li className="">
          👇
          <span className="ml-2">
            Fråga t.ex. <code>Skapa meningar om svensk mat</code> nedan!
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;
