import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

test('renders learn react link', () => {
  const { getByText } = render(<Button />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// const sum = require('./calculator');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });