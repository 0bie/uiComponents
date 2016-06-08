/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AccordionSection from './index';

describe('<AccordionSection />', () => {

    it('should render a section', () => {
        const wrapper = shallow(<AccordionSection />);
        expect(wrapper.is('section')).to.equal(true);
    });

    it('should have a title', () => {
        const wrapper = shallow(<AccordionSection title="test-title" />);
        expect(wrapper.find('h3').text()).to.equal('test-title');
    });

    it('should render children', () => {
        const wrapper = shallow(<AccordionSection><div /></AccordionSection>);
        expect(wrapper.find('div').children()).to.have.length(1);
    });
});