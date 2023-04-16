import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { Token } from '@/components/icons/IconUtils';

import SelectToken from '../SelectToken';

const mockToggleSelectedToken = jest.fn();
const mockToken = Token.DAI;
const mockIsSelected = false;

describe('SelectToken', () => {
  beforeEach(() => {
    render(<SelectToken token={mockToken} isSelected={mockIsSelected} toggleSelectedToken={mockToggleSelectedToken} />);
  });

  test('renders the component', () => {
    expect(screen.getByText(Token[mockToken])).toBeInTheDocument();
  });

  test('renders the token with correct styling based on isSelected prop', () => {
    const tokenElement = screen.getByTestId('token-div');
    expect(tokenElement).toHaveClass('border-white bg-black/30');
  });

  test('toggles the isSelected prop when clicking on the token', () => {
    const tokenElement = screen.getByTestId('token-div');
    fireEvent.click(tokenElement);
    expect(mockToggleSelectedToken).toHaveBeenCalledWith(mockToken);
  });

  test('clicks the Max button', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {
      return;
    });

    const maxButton = screen.getByText('Max');
    fireEvent.click(maxButton);
    expect(console.log).toHaveBeenCalledWith('clicked!');
  });
});
