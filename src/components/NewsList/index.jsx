import React, { useEffect, useCallback } from "react";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { useHackNews } from "hooks/useHackNews";
import CardNews from "components/CardNews";
import Spinner from "components/Spinner";
import "./NewList.css";

export default function NewsList() {
  const { newsList, setPage, loading, loadingNextPage } = useHackNews({
    keyword: "reactjs",
  });
  const { isNearFinalElement, finalPageDivRef } = useNearScreen({
    firstTime: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((previousPage) => previousPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (isNearFinalElement) debounceHandleNextPage();
  }, [isNearFinalElement, debounceHandleNextPage]);

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
      <div id="finalPageDivRef" ref={finalPageDivRef}></div>
    </div>
  );
}
