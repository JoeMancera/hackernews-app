import {render, screen, fireEvent} from '@testing-library/react'
import OptionPage from 'components/OptionPage'

describe('Tests for <OptionPage /> component', () => {

  test('Should show if root path is by default active', () => { 
    render(<OptionPage />)
    const allLink = screen.getByRole('link', {name: /All/i})
    
    expect(allLink).toHaveClass('active')
  })

  test('Should show if favorites page is active', () => { 
    render(<OptionPage />)
    const favoritesLink = screen.getByRole('link', {name: /My faves/i})
    fireEvent.click(favoritesLink)
    
    expect(favoritesLink).toHaveClass('active')
  })
});