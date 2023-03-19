import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';

import DappHeader from '@/components/document/Header/DappHeader';
import { LinkType } from '@/components/document/layout-config';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('DappHeader component', () => {
  const mockLinks: LinkType[] = [
    { name: 'Link1', url: '/link1' },
    { name: 'Link2', url: '/link2' },
    { name: 'Link3', url: '/link3' },
  ];

  it('renders all the links', () => {
    const { getByText } = render(<DappHeader links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });

  it('navigates to link on link click', () => {
    const wrapper = shallow(<DappHeader links={mockLinks} />);
    const mockLinksWithHomePageLink = [{ name: 'S', url: 'http://localhost/' }, ...mockLinks];
    const linkWrappers = wrapper.find(Link);
    linkWrappers.forEach((linkWrapper, index) => {
      expect(linkWrapper.prop('href')).toBe(mockLinksWithHomePageLink[index].url);
      expect(linkWrapper.find('div').text()).toBe(mockLinksWithHomePageLink[index].name);
    });
  });
});
