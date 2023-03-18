import { fireEvent, render } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import Header from '../Header';
import { LinkType } from '../layout';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('Header', () => {
  const mockLinks: LinkType[] = [
    { name: 'Link1', url: '/link1' },
    { name: 'Link2', url: '/link2' },
    { name: 'Link3', url: '/link3' },
  ];

  test('renders all the links', () => {
    const { getByText } = render(<Header links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });

  test('navigates to Dapp page on button click', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    const { getByText } = render(<Header links={mockLinks} />);
    const launchButton = getByText('Launch App');
    fireEvent.click(launchButton);
    expect(pushMock).toHaveBeenCalledWith('dapp');
  });
});
