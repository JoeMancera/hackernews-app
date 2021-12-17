import React from "react";
import { useHackNews } from "hooks/useHackNews";

export default function Home() {
  const { newsList } = useHackNews({ keyword: "react" });
  return (
    <div className="list-news">
      <h1>Hacker news list</h1>
      <ul>
        {newsList.map((news) => (
          <li key={`${news.story_id}-${news.created_at}`}>
            {news.story_title}
          </li>
        ))}
      </ul>
    </div>
  );
}
