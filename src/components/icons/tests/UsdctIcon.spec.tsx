import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import UsdcIcon from '../UsdcIcon';

describe('UsdcIcon component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UsdcIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
