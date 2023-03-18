import { render } from '@testing-library/react';
import React from 'react';

import { CurrentNetworkProvider } from '@/contexts/CurrentNetwork';

import Layout from '../Layout';

describe('Layout', () => {
  const mockChildren = <div data-testid='child'>Mock Children</div>;

  test('renders children', () => {
    const { getByTestId } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  test('renders Header component', () => {
    const { getByRole } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByRole('banner')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    const { getByRole } = render(
      <CurrentNetworkProvider>
        <Layout>{mockChildren}</Layout>
      </CurrentNetworkProvider>
    );
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
