import {render, screen, fireEvent} from '@testing-library/react'
import CardNews from 'components/CardNews'

const newsItemMock = {
  story_url: 'http://ycombinator.com',
  story_title: 'Y Combinator',
  author: 'User Name',
  difDate: '2021-12-20T18:21:51.000Z'
}

describe('Tests for <CardNews /> component', () => {

  test('Should show title news', () => {
    render(<CardNews newsInfo={newsItemMock} />)
    const titleNews = screen.getByText(/Y Combinator/i)
    expect(titleNews).toBeInTheDocument()
  })

  test('Should do click on the news link', () => {
    render(<CardNews newsInfo={newsItemMock} />)
    const linkNews = screen.getByRole('link', {name: /Y Combinator/i})
    fireEvent.click(linkNews)
    expect(linkNews).toHaveAttribute('href', 'http://ycombinator.com')
  })

});