import {render, screen} from '@testing-library/react'
import NewsList from 'components/NewsList'

const newsItemMock = [
  {
    story_id: 1,
    story_url: 'http://ycombinator.com',
    story_title: 'Y Combinator',
    author: 'User Name',
    difDate: '2021-12-20T18:21:51.000Z'
  },
  {
    story_id: 2,
    story_url: 'http://platzi.com',
    story_title: 'Platzi',
    author: 'User Name 2',
    difDate: '2021-12-21T18:21:51.000Z'
  },
  {
    story_id: 3,
    story_url: 'http://beek.io',
    story_title: 'Beek',
    author: 'User Name 3',
    difDate: '2021-12-19T18:21:51.000Z'
  },
]

describe('Tests from <NewsList /> component', () => {

  test('Should render 3 news items', () => {
    render(<NewsList newsList={newsItemMock} />)
    const newsItems = screen.getAllByRole('link')

    expect(newsItems.length).toBe(3)
  })

  test('Should show the spinner when is loading', () => {
    render(<NewsList newsList={newsItemMock} loading={true} />)
    const spinner = screen.getByRole('progressbar')

    expect(spinner).toBeInTheDocument()
  })

})