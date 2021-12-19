import React from "react";
import CardNews from "components/CardNews";
import Spinner from "components/Spinner";
import "./NewList.css";

export default function NewsList({ newsList, loading, loadingNextPage }) {
  return (
    <div className="list-news">
      {loading ? (
        <Spinner />
      ) : (
        newsList.map((news) => (
          <CardNews
            newsInfo={news}
            key={`${news.story_id}-${news.created_at}`}
          />
        ))
      )}
      {loadingNextPage && <Spinner />}
    </div>
  );
}
