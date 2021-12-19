import React, { useEffect, useCallback } from "react";
import NewsList from "components/NewsList";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { useHackNews } from "hooks/useHackNews";

export default function Home() {
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
    <>
      <NewsList
        newsList={newsList}
        loading={loading}
        loadingNextPage={loadingNextPage}
      />
      <div id="finalPageDivRef" ref={finalPageDivRef}></div>
    </>
  );
}
