"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";

const ValeriusHomepage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [htmlText, setHtmlText] = useState("");

  const fullText = `Hail, thou wayfaring shade... I am Valerius — Guardian of the Castle Gates, Warden of the Crimson Walls, and eternal Watcher of this haunted Realm.

Beyond these timeworn stones and veiled corridors dwell two dread Immortals:

🩸 Lord Dracula — Sovereign of Shadows, whose dominion hath endured three centuries. Ne'er hath he been glimpsed by mortal eye, yet his essence bleedeth through each whispering wind and trembling wall.

🕯️ Wolfgang — The Spectre Coder, Keeper of the Forbidden Codex. He doth toil in silence beneath the Castle Crypts, weaving knowledge from dust and dark. A ghost to many, a myth to most.

Thou now standest upon sacred threshold, where few mortals tread and fewer still return. Declare thy name, child of fleeting breath. Should thy heart be steady and thy purpose pure, I may grant thee mercy — and passage to the Castle Records, where ancient truths lie entombed.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const formatText = displayedText
      .replace(/Lord Dracula/g, "<strong>Lord Dracula</strong>")
      .replace(/Wolfgang/g, "<strong>Wolfgang</strong>")
      .replace(/Transylvania/g, "<strong>Transylvania</strong>");

    setHtmlText(formatText);
  }, [displayedText]);

  const handleGoogleSearch = () => {
    const query = "vampires OR dracula OR transylvania";
    const googleUK = `https://www.google.co.uk/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(googleUK, "_blank");
  };

  return (
    <div className="valerius-home-container flex flex-col items-center justify-center p-6 border-4 border-red-700 bg-black shadow-lg text-white w-[90vw] max-w-3xl h-auto">
      <h2 className="text-2xl text-red-500 gothic-text neon-text mb-6">
        🩸 Valerius AI — Sentinel of the Crimson Keep
      </h2>

      <p
        className="typewriter text-gray-200 text-sm whitespace-pre-line leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlText }}
      />

      <input
        type="text"
        className="valerius-home-input mt-6 w-full p-2 bg-black border border-red-600 text-white text-center"
        placeholder="Seek thy haunted realm"
      />

      <button
        className="valerius-home-button mt-4 w-full p-2 bg-red-700 hover:bg-red-900 transition duration-300"
        onClick={handleGoogleSearch}
      >
        Petition for Passage
      </button>
    </div>
  );
};

export default ValeriusHomepage;
