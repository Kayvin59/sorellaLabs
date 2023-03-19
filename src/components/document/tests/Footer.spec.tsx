import { render } from '@testing-library/react';
import React from 'react';

import { LinkType } from '@/components/document/layout-config';

import Footer from '../Footer';

describe('Footer component', () => {
  const mockLinks: LinkType[] = [
    { name: 'Link1', url: '/link1' },
    { name: 'Link2', url: '/link2' },
    { name: 'Link3', url: '/link3' },
  ];

  it('renders links', () => {
    const { getByText } = render(<Footer links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });

  it('renders correct number of links', () => {
    const { getAllByRole } = render(<Footer links={mockLinks} />);
    const links = getAllByRole('link');
    expect(links.length).toBe(mockLinks.length);
  });
});
