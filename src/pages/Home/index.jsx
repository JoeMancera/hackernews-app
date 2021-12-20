import React, { useEffect, useCallback } from "react";
import NewsList from "components/NewsList";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { useHackNews } from "hooks/useHackNews";
import TopicSelection from "components/TopicSelection";

export default function Home() {
  const { setKeyword, newsList, setPage, loading, loadingNextPage } =
    useHackNews();
  const { isNearFinalElement, finalPageDivRef } = useNearScreen({
    firstTime: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((previousPage) => previousPage + 1), 500),
    [setPage]
  );

  const handleChangeTopic = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (isNearFinalElement) debounceHandleNextPage();
  }, [isNearFinalElement, debounceHandleNextPage]);

  return (
    <>
      <TopicSelection onChange={handleChangeTopic} />
      <NewsList
        newsList={newsList}
        loading={loading}
        loadingNextPage={loadingNextPage}
      />
      <div id="finalPageDivRef" ref={finalPageDivRef}></div>
    </>
  );
}
