import React from "react";
import { useHackNews } from "hooks/useHackNews";
import CardNews from "components/CardNews";

export default function NewsList() {
  const { newsList } = useHackNews({ keyword: "reactjs" });
  return (
    <div className="list-news">
      {newsList.map((news) => (
        <CardNews newsInfo={news} key={`${news.story_id}-${news.created_at}`} />
      ))}
    </div>
  );
}
