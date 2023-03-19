import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../pages/home';

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

describe('Home page', () => {
  it('renders page title', () => {
    render(<Home />);
    // Exclude the non-title with the same text content
    const sorellaLabsElements = screen.getAllByText(/Sorella Labs/i, { ignore: 'div' });
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent(/Sorella Labs/i);
  });

  it('renders main content', () => {
    const { getByRole } = render(<Home />);
    expect(getByRole('main')).toBeInTheDocument();
  });

  it('renders headline', () => {
    render(<Home />);
    // Exclude the title with the same text content
    const sorellaLabsElements = screen.getAllByText(/Sorella Labs/i, { ignore: 'title' });
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent(/Sorella Labs/i);
  });

  it('renders subheadline', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Experience the Future of liquidity Provision')).toBeInTheDocument();
  });
});
