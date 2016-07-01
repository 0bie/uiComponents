/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../Button';
import ButtonGroup from './index';

describe('<ButtonGroup />', () => {

  it('should render a button group', () => {
    const wrapper = shallow(<ButtonGroup />);
    expect(wrapper.is('div')).to.equal(true);
  });

  it('should render buttons as children', () => {
    const wrapper = shallow(<ButtonGroup><Button /><Button /></ButtonGroup>);
    expect(wrapper.find(Button)).to.have.length(2);
  });
});