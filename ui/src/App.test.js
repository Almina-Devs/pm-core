import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders nav page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Dashboard');
  expect(linkElement).toBeInTheDocument();
});
