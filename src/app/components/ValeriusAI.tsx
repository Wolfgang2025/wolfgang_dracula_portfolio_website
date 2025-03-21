"use client";

import React, { useState } from "react";
import "../styles/globals.css";

const ValeriusAI: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const searchGemini = async () => {
    if (!query) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query }),
      });

      const data = await res.json();
      setResponse(data.result || "No relevant data found.");
    } catch (error) {
      setResponse("Error retrieving data.");
    } finally {
      setLoading(false);
    }
  };

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
          "What dost thou seek, wanderer? Speak, and I shall unveil the hidden
          truths that lie within the realm of Transylvania..."
        </p>

        {/* Search Input */}
        <input
          type="text"
          className="valerius-ai-input"
          placeholder="Enter thy query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Search Button */}
        <button
          className="valerius-ai-button"
          onClick={searchGemini}
          disabled={loading}
        >
          {loading ? "Seeking..." : "Reveal Thyself"}
        </button>

        {/* Response Display */}
        {response && <p className="valerius-ai-response">{response}</p>}
      </div>
    </div>
  );
};

export default ValeriusAI;
