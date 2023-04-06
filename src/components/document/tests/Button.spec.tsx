import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button, { ButtonVariant } from '../Button';

describe('Button component', () => {
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    expect(button).toBeInTheDocument();
  });

  it('renders square variant with proper className', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} variant={ButtonVariant.Square}>
        Click me!
      </Button>
    );
    const button = getByText('Click me!');
    expect(button).toHaveClass('max-h-14 rounded-lg px-10 py-3 font-bold text-white');
  });

  it('renders rounded variant with proper className', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} variant={ButtonVariant.Rounded}>
        Click me!
      </Button>
    );
    const button = getByText('Click me!');
    expect(button).toHaveClass('max-h-14 rounded-full px-10 py-3 font-bold text-white');
  });

  it('renders default variant with proper className', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>);
    const button = getByText('Click me!');
    expect(button).toHaveClass('max-h-14 rounded-lg px-10 py-3 font-bold text-white');
  });

  it('renders gradiant with proper className', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button gradient onClick={handleClick}>
        Click me!
      </Button>
    );
    const button = getByText('Click me!');
    expect(button).toHaveClass(
      'max-h-14 rounded-lg px-10 py-3 font-bold text-white bg-gradient-to-r from-sorella-purple to-sorella-pink'
    );
  });
});
