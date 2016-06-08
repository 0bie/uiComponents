/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardlistItem from './index';

describe('<CardlistItem />', () => {

    it('should render a list', () => {
        const wrapper = shallow(<CardlistItem />);
        expect(wrapper.is('li')).to.equal(true);
    });

    it('should provide info about the card', () => {
        const wrapper = shallow(<CardlistItem title="test-title" subtitle="test-subtitle" />);
        expect(wrapper.find('h3').text()).to.equal('test-title');
        expect(wrapper.find('h4').text()).to.equal('test-subtitle');
    });
});