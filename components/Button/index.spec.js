/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './index';
import Icon from '../Icon';

describe('<Button />', () => {

    it('should render a button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.is('button')).to.equal(true);
    });

    it('should render in a disabled state', () => {
        const wrapper = shallow(<Button disabled />);
        expect(wrapper.prop('disabled')).to.equal(true);
    });

    it('should render an icon', () => {
        const wrapper = shallow(<Button icon="test-icon" />);
        expect(wrapper.find(Icon)).to.have.length(1);
    });
});