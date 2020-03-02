import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})
