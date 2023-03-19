import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import DaiIcon from '../DaiIcon';

describe('DaiIcon component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DaiIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
