import {render, screen, fireEvent} from '@testing-library/react'
import FavoriteButton from 'components/FavoriteButton'

const newsItemMock = {
  story_url: 'http://ycombinator.com',
  story_title: 'Y Combinator',
  author: 'User Name',
  difDate: '2021-12-20T18:21:51.000Z'
}

describe('Tests fro <FavoriteButton /> component', () => {

  test('Should show the alt attribute as Add to favorites', () => {
    render(<FavoriteButton infoItem={newsItemMock} />)
    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('alt', 'Add to favorites')
  })
  
  test('Should change the alt attribute when its clicked', () => {
    render(<FavoriteButton infoItem={newsItemMock} />)
    const button = screen.getByRole('button')
    const image = screen.getByRole('img')

    fireEvent.click(button)

    expect(image).toHaveAttribute('alt', 'Remove from favorites')
  })

  test('Should show the alt attribute as Add to favorites when is removed', () => {
    render(<FavoriteButton infoItem={newsItemMock} />)
    const button = screen.getByRole('button')
    const image = screen.getByRole('img')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(image).toHaveAttribute('alt', 'Remove from favorites')
  })

})