const InfoCard = () => {
  return (
    <div className="p-4 md:p-8 rounded w-full lg:overflow-hidden overflow-y-auto">
      <a href="https://github.com/gustavosf2003">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">
          🤖 AI Assistent
        </h1>
      </a>
      <ul>
        <li className="text-l">
          👨‍🏫
          <span className="ml-2">
            Welcome to the Min Svenskalärare. I am Linnea, your friendly virtual
            Swedish language assistent!
          </span>
        </li>
        <li className="text-l hidden md:block">
          📝
          <span className="ml-2">
            Create Homework: Linnea can generate custom homework tailored to
            their language proficiency level and subjects
          </span>
        </li>
        <li className="text-l hidden md:block">
          🏋️‍♀️
          <span className="ml-2">
            Generate Exercises: Linnea can generate exercises to help you
            reinforce your Swedish language skills, from vocabulary quizzes to
            verb conjugation drills
          </span>
        </li>
        <li className="text-l hidden md:block">
          📖
          <span className="ml-2">
            Improve your reading skills: Here you can ask to read articles,
            poems and even fairy tales in Swedish. Please note that the
            available articles are up until August 2021.
          </span>
        </li>
        <li className="text-l hidden md:block">
          🌟
          <span className="ml-2">
            Don&apos;t hesitate to ask her anything, whether it&apos;s about
            Swedish traditions, idioms, or any aspect of the language
          </span>
        </li>

        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g. <code>Create sentences about swedish cousine</code>{" "}
            below!
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InfoCard;
