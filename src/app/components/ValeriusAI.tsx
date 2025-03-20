"use client";
import { useState } from "react";
import "../styles/globals.css";

export default function ValeriusAI() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Search via Gemini API
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query }),
      });
      const data = await res.json();
      setResponse(data.result || "No knowledge found.");
    } catch (error) {
      console.error("Search error:", error);
      setResponse("Something went wrong...");
    }
    setLoading(false);
  };

  return (
    <div className="valeriusAI">
      {/* AI Avatar & Title */}
      <div className="valeriusAI-header">
        <img
          src="/valerius.jpg"
          alt="Valerius AI"
          className="valeriusAI-avatar"
        />
        <h2 className="valeriusAI-title">Valerius AI</h2>
      </div>

      <p className="valeriusAI-text">
        "Greetings, mortal. How can I assist you?"
      </p>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Seek wisdom from the shadows..."
        className="valeriusAI-input"
      />

      <button onClick={handleSearch} className="valeriusAI-button">
        {loading ? "Summoning..." : "Search"}
      </button>

      {/* AI Response Box */}
      {response && <p className="valeriusAI-response">{response}</p>}
    </div>
  );
}
