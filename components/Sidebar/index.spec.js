/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sidebar from './index';

describe('<Sidebar />', () => {

  it('should render a sidebar', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should render sidebar items', () => {
    const wrapper = shallow(<Sidebar items={[{item: 'Test-item'}]}/>);
    expect(wrapper.find('li')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Sidebar items={[{item: 'Test-item', children: <span />}]}/>);
    expect(wrapper.find('span')).to.have.length(1);
  });
});