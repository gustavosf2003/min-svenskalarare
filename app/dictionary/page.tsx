import { ChatWindow } from "@/components/ChatWindow";

export default function Words() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%]  lg:overflow-hidden overflow-y-auto">
      <a href="https://github.com/gustavosf2003">
        <h1 className="mb-4 text-3xl text-white md:text-4xl">Lexikon 📖 🔗</h1>
      </a>
      <ul>
        <li className="text-l">
          👨‍🏫
          <span className="ml-2">
            Welcome to the Lexikon. I am Gustav, your virtual Swedish
            dictionary!
          </span>
        </li>
        <li className="text-l">
          📝
          <span className="ml-2">
            Meaning of the words: Gustav can provide the meaning of any word in
            Swedish and help you to improve your vocabulary
          </span>
        </li>
        <li className="text-l">
          🏋️‍♀️
          <span className="ml-2">
            Verb forms: I can also provide the different forms of a verb in
            Swedish (present, past, supine, etc.)
          </span>
        </li>
        <li className="text-l">
          📖
          <span className="ml-2">
            En or Ett? Gustav can also tell you whether a word is an en-word or
            ett-word and its plural form (if it has one)
          </span>
        </li>

        <li className="text-l">
          👇
          <span className="ml-2">
            Try writing e.g. <code>Spelade </code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="chat/dictionary"
      emoji="🤖"
      titleText="Lexikon"
      placeholder="Type your word"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
