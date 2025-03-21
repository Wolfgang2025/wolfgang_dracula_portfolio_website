import { useEffect, useState } from "react";

export default function GothicScene() {
  return (
    <div className="gothic-scene-container">
      {/* 📰 Ghostly News Ticker */}
      <GhostlyNewsTicker />
    </div>
  );
}

/* 📰 Ghostly News Ticker with API Fetch */
function GhostlyNewsTicker() {
  const [news, setNews] = useState(
    "Fetching the latest whispers from the shadows..."
  );

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=technology&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0].title);
        }
      } catch (error) {
        setNews("The night is silent... No whispers from the web.");
      }
    }
    fetchNews();
  }, []);

  return <div className="news-ticker">🩸 {news} 🩸</div>;
}

/* 🩸 Global Gothic Scene Flexbox Styling */
const styles = `
  .gothic-scene-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: black;
  }

  .news-ticker {
    position: absolute;
    top: 20px;
    left: 5%;
    right: 5%;
    width: 90%;
    padding: 10px 20px;
    text-align: center;
    color: #ff0000;
    font-size: 1.2rem;
    font-family: "Italiana", serif;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #ff0000;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
    animation: pulse 1.5s infinite alternate;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }

  .news-ticker:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 0, 0, 1);
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 5px #ff0000;
    }
    100% {
      text-shadow: 0 0 15px #ff0000;
    }
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
