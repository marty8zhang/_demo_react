import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home', () => {
  const { getAllByText } = render(<App />);
  const elements = getAllByText(/home/i);
  elements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
