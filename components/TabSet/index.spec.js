/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TabSet from './index';
import TabSection from '../TabSection';

describe('<TabSet />', () => {

    it('should render a tab set', () => {
        const wrapper = shallow(<TabSet />);
        expect(wrapper.find('ul')).to.have.length(1)
    });

    it('should render tab sections', () => {
        const wrapper = shallow(<TabSet><TabSection /></TabSet>);
        expect(wrapper.find('ul').children()).to.have.length(1);
    });
});