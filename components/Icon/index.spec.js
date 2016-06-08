/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Icon from './index';

describe('<Icon />', () => {

    it('should render an svg', () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper.is('svg')).to.equal(true);
    });

    it('should render a title', () => {
        const wrapper = shallow(<Icon title="test-title" />);
        expect(wrapper.find('title').text()).to.equal('test-title');
    });

    it('should render an icon', () => {
        const wrapper = shallow(<Icon name="test-name" />);
        expect(wrapper.find('use')).to.have.length(1)
        expect(wrapper.find('use').html()).to.equal('<use xlink:href="/assets/sprite.svg#test-name"></use>');
    });

    it('should have default dimensions', () => {
        const wrapper = shallow(<Icon width={40} height={40} />);
        console.log(wrapper.debug());
        expect(wrapper.prop('width')).to.equal(40)
        expect(wrapper.prop('height')).to.equal(40)
    });
});