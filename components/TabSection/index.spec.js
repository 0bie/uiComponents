/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TabSection from './index';

describe('<TabSection />', () => {

    it('should render a tab section', () => {
        const wrapper = shallow(<TabSection />);
        expect(wrapper.is('li')).to.equal(true);
    });

    it('should render a title', () => {
        const wrapper = shallow(<TabSection title="test-title" />);
        expect(wrapper.find('span').text()).to.equal('test-title');
    });

    it('should render children', () => {
        const wrapper = shallow(<TabSection><div /><div /></TabSection>);
        expect(wrapper.find('div').children()).to.have.length(2);
    });
});