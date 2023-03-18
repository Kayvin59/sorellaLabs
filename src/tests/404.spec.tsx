import { render, screen } from '@testing-library/react';
import React from 'react';

import NotFoundPage from '../pages/404';

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

describe('404 component', () => {
  test('renders page title', () => {
    render(<NotFoundPage />);
    // Exclude the non-title with the same text content
    const sorellaLabsElements = screen.getAllByText(/Not Found/i, { ignore: 'h1' });
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent(/Not Found/i);
  });

  test('renders main content', () => {
    const { getByRole } = render(<NotFoundPage />);
    expect(getByRole('main')).toBeInTheDocument();
  });

  test('renders headline', () => {
    render(<NotFoundPage />);
    // Exclude the title with the same text content
    const sorellaLabsElements = screen.getAllByText('Page Not Found');
    expect(sorellaLabsElements).toHaveLength(1);
    expect(sorellaLabsElements[0]).toHaveTextContent('Page Not Found');
  });
});
