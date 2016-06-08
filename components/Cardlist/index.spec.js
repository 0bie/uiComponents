/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Cardlist from './index';
import CardlistItem from '../CardlistItem';

describe('<Cardlist />', () => {

    it('should render a list', () => {
        const wrapper = shallow(<Cardlist />);
        console.log(wrapper.debug());
        expect(wrapper.is('ul')).to.equal(true);
    });

    it('should accept children', () => {
        const wrapper = shallow(<Cardlist><CardlistItem /></Cardlist>);
        expect(wrapper.find('ul').children()).to.have.length(1);
    });
});