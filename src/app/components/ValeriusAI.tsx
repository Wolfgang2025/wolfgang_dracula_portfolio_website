"use client";

import React, { useState, useEffect } from "react";
import "../styles/globals.css";

const ValeriusAI: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [searchTime, setSearchTime] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/wolfgang_profile.json")
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // 🔍 Scan an array of strings or objects for matches
  const searchArray = (arr: any[], label: string, keyFields?: string[]) => {
    const lowerQuery = query.toLowerCase();
    const matches: string[] = [];

    arr.forEach((item) => {
      if (typeof item === "string") {
        if (item.toLowerCase().includes(lowerQuery)) {
          matches.push(item);
        }
      } else if (typeof item === "object") {
        Object.entries(item).forEach(([key, value]) => {
          if (
            typeof value === "string" &&
            value.toLowerCase().includes(lowerQuery)
          ) {
            matches.push(
              `${keyFields?.length ? item[keyFields[0]] : key}: ${value}`
            );
          }
        });
      }
    });

    return matches.length ? `🩸 **${label} Match**\n${matches.join("\n")}` : "";
  };

  const searchValerius = async () => {
    if (!query || !profileData) return;
    setLoading(true);
    setResponse("");

    const results: string[] = [];
    const lowerQuery = query.toLowerCase();

    // Search: Skills
    if (profileData.skills) {
      const matchedSkills = profileData.skills.filter((skill: string) =>
        skill.toLowerCase().includes(lowerQuery)
      );
      if (matchedSkills.length) {
        results.push(`🩸 **Skills Match**\n${matchedSkills.join(", ")}`);
      }
    }

    // Search: Experience
    if (profileData.experience) {
      const matches = searchArray(profileData.experience, "Experience", [
        "title",
        "company",
      ]);
      if (matches) results.push(matches);
    }

    // Search: Education
    if (profileData.education) {
      const matches = searchArray(profileData.education, "Education", [
        "degree",
        "school",
      ]);
      if (matches) results.push(matches);
    }

    // Search: Links
    if (profileData.links) {
      const linkMatches = Object.entries(profileData.links)
        .filter(([key, value]) =>
          `${key} ${value}`.toLowerCase().includes(lowerQuery)
        )
        .map(([key, value]) => `${key}: ${value}`);
      if (linkMatches.length) {
        results.push(`🩸 **Links Match**\n${linkMatches.join("\n")}`);
      }
    }

    // If match found, show result
    if (results.length > 0) {
      setResponse(
        `🔎 Thou hast stirred echoes in the crypt:\n\n${results.join("\n\n")}`
      );
      setLoading(false);
      return;
    }

    // 🌐 Fallback to Google search
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(googleSearchURL, "_blank");
    setResponse(
      `🩸 I hath found no record within these crypts... Seeking knowledge beyond the veil (Google Search).`
    );
    setLoading(false);
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
          onClick={searchValerius}
          disabled={loading}
        >
          {loading ? "Seeking..." : "Seek thy haunted realm"}
        </button>

        {/* Response Display */}
        {response && <p className="valerius-ai-response">{response}</p>}
      </div>
    </div>
  );
};

export default ValeriusAI;
