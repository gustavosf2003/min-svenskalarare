import React, { useState } from "react";

import { SpeakerHigh, StopCircle } from "@phosphor-icons/react";

const SpeechComponent = ({ text }: { text: string }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!("speechSynthesis" in window)) {
      console.error("Speech Synthesis API not supported in this browser.");
      return;
    }
    if (isSpeaking) {
      return;
    }
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.lang = "sv-SE";

    newUtterance.onend = () => setIsSpeaking(false);
    newUtterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(newUtterance);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        aria-label="Lyssna på texten"
        className="flex items-center justify-center p-2 rounded-xl hover:bg-[#2F2F2F] hover:bg-opacity-40"
        onClick={() => {
          if (isSpeaking) {
            handleStop();
          } else {
            handleSpeak();
          }
        }}
      >
        {isSpeaking ? (
          <StopCircle weight="fill" fill="#ececec" size={16} />
        ) : (
          <SpeakerHigh size={16} />
        )}
      </button>
    </div>
  );
};

export default SpeechComponent;
