/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Accordion from './index';
import AccordionSection from '../AccordionSection';

describe('<Accordion />', () => {

    it('should render a section', () => {
        const wrapper = shallow(<Accordion />);
        expect(wrapper.is('div')).to.equal(true);
    });

    it('should render an accordion section', () => {
        const wrapper = shallow(<Accordion><AccordionSection /></Accordion>);
        expect(wrapper.find(AccordionSection)).to.have.length(1)
    });
});