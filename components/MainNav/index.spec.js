/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainNav from './index';
import MainNavForm from '../MainNavForm';

describe('<MainNav />', () => {

    it('should render a nav', () => {
        const wrapper = shallow(<MainNav />);
        expect(wrapper.find('nav')).to.have.length(1);
        expect(wrapper.find('ul')).to.have.length(1);
    });

    it('should render a form', () => {
        const wrapper = shallow(<MainNav><MainNavForm /></MainNav>);
        expect(wrapper.find(MainNavForm)).to.have.length(1);
    });
});