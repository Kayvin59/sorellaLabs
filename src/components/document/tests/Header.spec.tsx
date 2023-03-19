import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';

import HomeHeader from '@/components/document/Header/HomeHeader';
import { LinkType } from '@/components/document/layout-config';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('Header component', () => {
  const mockLinks: LinkType[] = [
    { name: 'Link1', url: '/link1' },
    { name: 'Link2', url: '/link2' },
    { name: 'Link3', url: '/link3' },
  ];

  it('renders all the links', () => {
    const { getByText } = render(<HomeHeader links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(getByText(link.name)).toBeInTheDocument();
    });
  });

  it('navigates to link on link click', () => {
    const wrapper = shallow(<HomeHeader links={mockLinks} />);
    const linkWrappers = wrapper.find(Link);
    linkWrappers.forEach((linkWrapper, index) => {
      expect(linkWrapper.prop('href')).toBe(mockLinks[index].url);
      expect(linkWrapper.find('div').text()).toBe(mockLinks[index].name);
    });
  });

  it('navigates to Dapp page on button click', () => {
    const mockFn = jest.spyOn(window, 'open');
    const { getByText } = render(<HomeHeader links={mockLinks} />);
    const launchButton = getByText('Launch App');
    fireEvent.click(launchButton);
    expect(mockFn).toHaveBeenCalledWith('http://dapp.localhost/strategies');
  });
});
