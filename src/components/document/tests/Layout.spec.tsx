import { render } from '@testing-library/react';
import React from 'react';

import { CurrentNetworkProvider } from '@/contexts/CurrentNetwork';

import Layout from '../Layout';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({ asPath: '' }),
}));

describe('Layout component', () => {
  const mockChildren = <div data-testid='child'>Mock Children</div>;

  it('renders children', () => {
    const { getByTestId } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  it('renders Header component', () => {
    const { getByRole } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    const { getByRole } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
