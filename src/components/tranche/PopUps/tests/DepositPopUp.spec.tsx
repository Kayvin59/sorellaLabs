import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { Token } from '@/components/icons/IconUtils';
import { Protocol, Strategy } from '@/components/strategies/strategies-config';

import DepositPopUp from '../DepositPopUp';

const mockOnClose = jest.fn();
const mockStrategy: Strategy = {
  name: 'Test Strategy',
  tokensExposure: [Token.DAI, Token.USDC, Token.USDT],
  protocolsExposure: [Protocol.BalancerV2],
  url: '',
};

describe('DepositPopUp', () => {
  beforeEach(() => {
    render(<DepositPopUp show={true} onClose={mockOnClose} strategy={mockStrategy} />);
  });

  test('renders the component', () => {
    expect(screen.getByText('Select asset(s) to deposit into Test Strategy')).toBeInTheDocument();
  });

  test('renders the token options', () => {
    mockStrategy.tokensExposure.forEach((token) => {
      expect(screen.getByText(Token[token])).toBeInTheDocument();
    });
  });

  test('selects "Deposit" button', () => {
    const singleTokenButton = screen.getByText('Deposit');

    fireEvent.click(singleTokenButton);
    expect(singleTokenButton).toHaveClass('bg-gradient-to-r');
  });

  test('selects "deposit all tokens in a balanced proportion" button', () => {
    const singleTokenButton = screen.getByText('Deposit all tokens in a balanced proportion');

    fireEvent.click(singleTokenButton);
    expect(singleTokenButton).toHaveClass('bg-black/10');
  });
});
