import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import { DAPP_HEADER_LINKS, HOME_HEADER_LINKS } from '@/components/document/layout-config';

import Header from '../index';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('Header component', () => {
  it('renders the home header when not in the dapp', () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: '/' });

    render(<Header />);

    const homeHeaderLinks = screen.getAllByRole('link');

    expect(homeHeaderLinks).toHaveLength(HOME_HEADER_LINKS.length);

    homeHeaderLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', HOME_HEADER_LINKS[index].url);
      expect(link).toHaveTextContent(HOME_HEADER_LINKS[index].name);
    });
  });

  it('renders the dapp header when navigating to the dapp after mounting', () => {
    const { rerender } = render(<Header />);

    (useRouter as jest.Mock).mockReturnValue({ asPath: '/' });
    rerender(<Header />);

    (useRouter as jest.Mock).mockReturnValue({ asPath: DAPP_HEADER_LINKS[0].url });
    rerender(<Header />);

    const dappHeaderLinks = screen.getAllByRole('link');
    const mockLinksWithHomePageLink = [{ name: 'S', url: 'http://localhost/' }, ...DAPP_HEADER_LINKS];

    expect(dappHeaderLinks).toHaveLength(mockLinksWithHomePageLink.length);

    dappHeaderLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', mockLinksWithHomePageLink[index].url);
      expect(link).toHaveTextContent(mockLinksWithHomePageLink[index].name);
    });
  });
});
