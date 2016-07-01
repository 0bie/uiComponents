/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CarouselItem from './index';

describe('<CarouselItem />', () => {

  it('should render a list item', () => {
    const wrapper = shallow(<CarouselItem />);
    expect(wrapper.is('li')).to.equal(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<CarouselItem><div /><div /></CarouselItem>);
    expect(wrapper.find('div')).to.have.length(2);
  });
});