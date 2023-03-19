import { render, screen } from '@testing-library/react';

import { getTokenLogo, Token } from '@/components/icons/IconUtils';

describe('getTokenLogo function', () => {
  it('returns the correct icon for USDC', () => {
    const result = getTokenLogo(Token.USDC);
    render(result);
    const icon = screen.getByTestId('usdc-icon');
    expect(icon).toBeInTheDocument();
  });

  it('returns the correct icon for DAI', () => {
    const result = getTokenLogo(Token.DAI);
    render(result);
    const icon = screen.getByTestId('dai-icon');
    expect(icon).toBeInTheDocument();
  });

  it('returns the correct icon for USDT', () => {
    const result = getTokenLogo(Token.USDT);
    render(result);
    const icon = screen.getByTestId('usdt-icon');
    expect(icon).toBeInTheDocument();
  });

  it('returns the USDC icon for unknown tokens', () => {
    const result = getTokenLogo('UNKNOWN' as unknown as Token);
    render(result);
    const icon = screen.getByTestId('usdc-icon');
    expect(icon).toBeInTheDocument();
  });
});
