import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import LoadingIcon from '@/components/icons/LoadingIcon';

describe('LoadingIcon component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoadingIcon />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
