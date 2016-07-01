/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Carousel from './index';
import CarouselItem from '../CarouselItem';

describe('<Carousel />', () => {

  it('should render a div', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.is('div')).to.equal(true);
  });

  it('should render carousel items', () => {
    const wrapper = shallow(<Carousel><CarouselItem /></Carousel>);
    expect(wrapper.find(CarouselItem)).to.have.length(1);
  });
});