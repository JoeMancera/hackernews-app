import {useEffect, useState} from 'react'
import getHackNews from 'service/getHackNews';

const INITIAL_PAGE = 0;
/**
 * Custom Hook to get news from getHackNews service
 * @param {string} keyword Keyword to search
 * @returns {Array} News list
 */
export function useHackNews({ keyword } = { keyword : null}) {
  const [newsList, setNews] = useState([]);
  const keywordToUse = keyword || localStorage.getItem('hna-lastFilter') || 'react,angular,vue';

  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    getHackNews({ keyword: keywordToUse })
    .then((news) => {
      setNews(news);
      setLoading(false);
      localStorage.setItem('hna-lastFilter', keyword);
    });

  }, [keyword, keywordToUse, setNews]);

  useEffect(() => {
    setLoadingNextPage(true);

    if(page === INITIAL_PAGE) return 

    setNews({ keyword: keywordToUse, page })
    .then((nextNewsList) => {
      setNews(prevNewsList => prevNewsList.concat(nextNewsList));
      setLoadingNextPage(false);
    })

  }, [keywordToUse, page, setNews])
  return { newsList, setPage, loading, loadingNextPage };

}
