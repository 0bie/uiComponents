/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './index';

describe('<Container />', () => {

    it('should render a section', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.is('section')).to.equal(true);
    });

    it('should render a title', () => {
        const wrapper = shallow(<Container title="test-title" />);
        expect(wrapper.find('h1').text()).to.equal('test-title');
    });

    it('should render children', () => {
        const wrapper = shallow(<Container><div /></Container>);
        expect(wrapper.find('div')).to.have.length(1)
    });
});