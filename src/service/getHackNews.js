import { API_URL } from './settings'
import getCreatedTime from './getCreateTime' 

const fromApiResponseToNews = (apiResponse) => {
  const {hits = []} = apiResponse
  if (Array.isArray(hits)){
    const news = hits.map(newsItem => {
      const {author, created_at, story_title, story_url, story_id} = newsItem
      const difDate = getCreatedTime({ created_at })

      return {author, created_at, difDate, story_title, story_url, story_id}
    })
    return news
  }
  return []
}
/**
 * Service to get news from Hacker News API
 * @param {string} keyword Keyword to search
 * @param {number} page Page to get
 * @returns {Array} News list
 */
export default function getHackNews({ keyword = 'reactjs,angular,vuejs', page = 0 } = {}) {
  const apiURL = `${API_URL}?query=${keyword}&page=${page}`

  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToNews)
  .catch(error => {
    console.error(error)
    return[]
  })
}
