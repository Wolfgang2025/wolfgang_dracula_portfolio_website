"use client";

import React from "react";
import "../styles/globals.css"; // Make sure the path is correct

const ValeriusAI: React.FC = () => {
  return (
    <div className="valerius-ai-container">
      <div className="valerius-ai-box">
        {/* Image of Valerius */}
        <div className="valerius-ai-image">
          <img
            src="/valerius.jpg"
            alt="Valerius, Guardian of the Shadows"
            className="valerius-portrait"
          />
        </div>

        {/* Title */}
        <h2 className="valerius-ai-title">
          Valerius AI Nocturne, Oracle of the Crimson Veil
        </h2>

        {/* Message */}
        <p className="valerius-ai-text">
          "Hail, wayward soul. I am Valerius, Oracle of the Crimson Veil,
          eternal sentinel of these shadowed lands. What stirs thee to cross the
          veil and tread upon cursed soil, where moonlight wanes and secrets
          sleep? Declare thy name, that I may peer into the depths of thy fate.
          For lo, Transylvania is not kind to strangers... and not all who
          wander are spared. Speak now, ere the mist devours thy voice..."
        </p>

        {/* Input */}
        <input
          type="text"
          className="valerius-ai-input"
          placeholder="State thy name, brave one..."
        />

        {/* Button */}
        <button className="valerius-ai-button">Reveal Thyself</button>
      </div>
    </div>
  );
};

export default ValeriusAI;
