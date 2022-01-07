import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dog adoption app', async () => {
  render(<App />);
  const linkElement = screen.getByText('HOME');
  await screen.findByText('Meet Etta');
  expect(linkElement).toBeInTheDocument();
});
