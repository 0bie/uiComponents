/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Spinner from './index';

describe('<Spinner />', () => {

  it('should render an svg', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('circle')).to.have.length(1);
  });

  it('should render in different sizes', () => {
    const wrapper = shallow(<Spinner width={32} height={32} />);
    expect(wrapper.prop('width')).to.equal(32);
    expect(wrapper.prop('height')).to.equal(32);
  });
});