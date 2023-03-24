import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

import TransactionDashboard from '../index';

describe('TransactionDashboard component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TransactionDashboard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
