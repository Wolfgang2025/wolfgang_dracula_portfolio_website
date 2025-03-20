"use client";
import gsap from "gsap";
import { useEffect } from "react";
import "../app/styles/globals.css";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <h1 className="text-5xl gothic-text text-red-600">
        Welcome to Transylvania
      </h1>
      <p className="mt-4 text-gray-400 italic">
        Where eternity lingers and the veil betwixt shadow and night dissolves
        into naught...
      </p>

      {/* Neon-Red Textbox for Dracula & Wolfgang */}
      <div className="mt-10 w-2/3 p-6 bg-black/80 border-4 border-red-600 shadow-lg neon-border text-white">
        <h2 className="text-3xl text-red-500 gothic-text">
          🩸 Lord Dracula & Wolfgang
        </h2>
        <p className="mt-4">
          <strong className="text-red-400">
            Lord Dracula, Overlord of the Realm:
          </strong>
          For 300 years, Lord Dracula has ruled Transylvania. The land belongs
          to his clan, and none dare challenge his reign. None have seen him,
          yet his presence is undeniable. His power courses through every stone,
          every whisper of wind. He is the unchallenged overlord, the eternal
          shadow cast over the land.
        </p>
        <p className="mt-4">
          <strong className="text-red-400">
            Wolfgang, Harbinger of Darkened Tomes:
          </strong>
          In the shadows of Dracula’s rule, Wolfgang treads between the mortal
          and the spectral. A scholar of the forbidden texts, he is the keeper
          of lost knowledge, the harbinger of truths that should remain buried.
          To seek him is to seek understanding—but beware, for knowledge has its
          price.
        </p>
      </div>
    </div>
  );
}
