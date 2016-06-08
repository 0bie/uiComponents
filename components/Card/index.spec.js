/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './index';
import CardItem from '../CardItem';


describe('<Card />', () => {

    it('should render a div', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.is('div')).to.equal(true);
    });

    it('should render a CardItem', () => {
        const wrapper = shallow(<Card><CardItem /></Card>);
        expect(wrapper.find(CardItem)).to.have.length(1)
    });

    it('should have a title', () => {
        const wrapper = shallow(<Card title="test-title" />);
        expect(wrapper.find('h4').text()).to.equal('test-title');
    });
});