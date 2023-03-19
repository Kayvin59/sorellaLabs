import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

import { Token } from '@/components/icons/IconUtils';
import { Protocol } from '@/components/strategies/strategies-config';

import TrancheCard from '../TrancheCard';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('TrancheCard component', () => {
  const strategy = {
    name: 'Test Strategy',
    tokensExposure: [Token.USDT, Token.USDC, Token.DAI],
    protocolsExposure: [Protocol.UniswapV2, Protocol.UniswapV3],
    url: '/test-strategy',
  };

  it('renders the strategy name and tokens exposure', () => {
    render(<TrancheCard {...strategy} />);
    expect(screen.getByText('Test Strategy')).toBeInTheDocument();
    expect(screen.getByText('Tokens Exposure')).toBeInTheDocument();
    expect(screen.getByTestId('usdt-icon')).toBeInTheDocument();
    expect(screen.getByTestId('usdc-icon')).toBeInTheDocument();
    expect(screen.getByTestId('dai-icon')).toBeInTheDocument();
  });

  it('renders the protocols exposure', () => {
    render(<TrancheCard {...strategy} />);
    expect(screen.getByText('Protocols Exposure')).toBeInTheDocument();
    expect(screen.getByText('Uniswap V2')).toBeInTheDocument();
    expect(screen.getByText('Uniswap V3')).toBeInTheDocument();
  });

  it('navigates to the correct URL when the view button is clicked', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(<TrancheCard {...strategy} />);
    fireEvent.click(screen.getByText('View'));
    expect(pushMock).toHaveBeenCalledWith('/test-strategy');
  });
});
