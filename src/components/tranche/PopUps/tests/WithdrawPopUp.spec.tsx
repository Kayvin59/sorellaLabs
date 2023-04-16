import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { Token } from '@/components/icons/IconUtils';
import { Protocol, Strategy } from '@/components/strategies/strategies-config';

import WithdrawPopUp from '../WithdrawPopUp';

const mockOnClose = jest.fn();
const mockStrategy: Strategy = {
  name: 'Test Strategy',
  tokensExposure: [Token.DAI, Token.USDC, Token.USDT],
  protocolsExposure: [Protocol.BalancerV2],
  url: '',
};

describe('WithdrawPopUp', () => {
  beforeEach(() => {
    render(<WithdrawPopUp show={true} onClose={mockOnClose} strategy={mockStrategy} />);
  });

  test('renders the component', () => {
    expect(screen.getByText('Withdraw from Test Strategy')).toBeInTheDocument();
  });

  test('renders the token options', () => {
    mockStrategy.tokensExposure.forEach((token) => {
      expect(screen.getByText(Token[token])).toBeInTheDocument();
    });
  });

  test('selects "Withdraw" button', () => {
    const singleTokenButton = screen.getByText('Withdraw');

    fireEvent.click(singleTokenButton);
    expect(singleTokenButton).toHaveClass('bg-gradient-to-r');
  });

  test('selects Single Token, Balanced, and Custom buttons', () => {
    const singleTokenButton = screen.getByText('Single Token');
    const balancedButton = screen.getByText('Balanced');
    const customButton = screen.getByText('Custom');

    fireEvent.click(singleTokenButton);
    expect(singleTokenButton).toHaveClass('bg-gradient-to-r');

    fireEvent.click(balancedButton);
    expect(balancedButton).toHaveClass('bg-gradient-to-r');

    fireEvent.click(customButton);
    expect(customButton).toHaveClass('bg-gradient-to-r');
  });
});
