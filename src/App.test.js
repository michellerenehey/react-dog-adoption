import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dog adoption app', () => {
  render(<App />);
  const linkElement = screen.getByText('HOME');
  expect(linkElement).toBeInTheDocument();
});
