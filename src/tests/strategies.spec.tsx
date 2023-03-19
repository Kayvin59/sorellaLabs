import { render, screen } from '@testing-library/react';
import React from 'react';

import Strategies from '@/pages/strategies';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({ asPath: '' }),
}));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('Strategies page', () => {
  it('renders page title', () => {
    render(<Strategies />);
    // Exclude the non-title with the same text content
    const sorellaLabsElements = screen.getAllByText(/Strategies/i, { ignore: 'div' });
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent(/Strategies/i);
  });

  it('renders main content', () => {
    const { getByRole } = render(<Strategies />);
    expect(getByRole('main')).toBeInTheDocument();
  });

  it('renders headline', () => {
    render(<Strategies />);
    const sorellaLabsElements = screen.getAllByText(/Strategies Dashboard/i);
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent(/Strategies Dashboard/i);
  });

  it('renders subheadline', () => {
    const { getByText } = render(<Strategies />);
    expect(getByText('With Sorella, you never have to compromise compatibility and efficiency.')).toBeInTheDocument();
  });

  it('should render three TrancheCard components', () => {
    const { getAllByTestId } = render(<Strategies />);
    const trancheCards = getAllByTestId('tranche-card');
    expect(trancheCards.length).toBe(3);
  });
});
