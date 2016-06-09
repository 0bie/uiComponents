/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ListItem from './index';

describe('<ListItem />', () => {

    it('should render a list item', () => {
        const wrapper = shallow(<ListItem />);
        expect(wrapper.is('li')).to.equal(true);
    });

    it('should render children', () => {
        const wrapper = shallow(<ListItem><div /><div /></ListItem>);
        expect(wrapper.find('div')).to.have.length(2);
    });
});