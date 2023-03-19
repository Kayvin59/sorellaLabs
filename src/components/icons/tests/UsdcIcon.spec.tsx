import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import UsdtIcon from '@/components/icons/UsdtIcon';

describe('UsdtIcon component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UsdtIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
