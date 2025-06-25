import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Services heading', () => {
  render(<App />);
  const heading = screen.getByText(/services/i);
  expect(heading).toBeInTheDocument();
});

test('renders footer brand', () => {
  render(<App />);
  const footer = screen.getByText(/Uberhaus/i);
  expect(footer).toBeInTheDocument();
});