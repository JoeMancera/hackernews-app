import { render, screen } from '@testing-library/react';
import App from '../App';
// eslint-disable-next-line jest/no-mocks-import
import '../__mocks__/intersectionObserverMock'

describe('Tests for <CardNews /> component', () => {
  
  test('Should render title page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hacker news/i);
    expect(linkElement).toBeInTheDocument();
  });

})
