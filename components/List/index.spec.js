/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import List from './index';
import ListItem from '../ListItem';

describe('<List />', () => {

    it('should render a list', () => {
        const wrapper = shallow(<List hasHover />);
        expect(wrapper.is('ul')).to.equal(true);
    });

    it('should render list items', () => {
        const wrapper = shallow(<List><ListItem /></List>);
        expect(wrapper.find(ListItem)).to.have.length(1);
    });
});