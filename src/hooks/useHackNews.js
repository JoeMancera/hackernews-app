import {useEffect, useState} from 'react'
import getHackNews from 'service/getHackNews';

const INITIAL_PAGE = 0;
/**
 * Custom Hook to get news from getHackNews service
 * @returns {Array} News list
 */
export function useHackNews() {
  const keyword = localStorage.getItem("hna-lastFilter") !== null ? localStorage.getItem("hna-lastFilter") : "reactjs,angular,vuejs"; 
  const [newsList, setNews] = useState([]);
  const [keywordToUse, setKeyword] = useState(keyword);

  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  useEffect(() => {
    setLoading(true);

    getHackNews({ keyword: keywordToUse })
    .then((news) => {
      setNews(news);
      setLoading(false);
      localStorage.setItem('hna-lastFilter', keywordToUse);
    });

  }, [keywordToUse, setNews]);

  useEffect(() => {
    setLoadingNextPage(true);
    if(page === INITIAL_PAGE) return 

    getHackNews({ keyword: keywordToUse, page })
    .then((nextNewsList) => {
      setNews(prevNewsList => prevNewsList.concat(nextNewsList));
      setLoadingNextPage(false);
    })

  }, [keywordToUse, page, setNews])
  return {setKeyword, newsList, setPage, loading, loadingNextPage };

}
