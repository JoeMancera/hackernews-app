import React, { useEffect, useCallback } from "react";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { useHackNews } from "hooks/useHackNews";
import CardNews from "components/CardNews";
import "./NewList.css";

export default function NewsList() {
  const { newsList } = useHackNews({ keyword: "reactjs" });
  const { isNearScreen, finalPageDivRef } = useNearScreen({ firstTime: false });

  const debounceHandleNextPage = useCallback(
    debounce(() => console.log("Next page", isNearScreen), 500),
    [isNearScreen]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <div className="list-news">
      {newsList.map((news) => (
        <CardNews newsInfo={news} key={`${news.story_id}-${news.created_at}`} />
      ))}
      <div id="finalPageDivRef" ref={finalPageDivRef}></div>
    </div>
  );
}
