import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '../Button';

describe('Button', () => {
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders children', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    expect(button).toBeInTheDocument();
  });

  test('renders with proper className', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    expect(button).toHaveClass(
      'rounded-full bg-gradient-to-r from-sorella-purple to-sorella-pink px-10 py-4 text-white'
    );
  });
});
