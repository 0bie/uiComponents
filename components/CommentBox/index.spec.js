/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommentBox from './index';

describe('<CommentBox />', () => {

    it('should render a div', () => {
        const wrapper = shallow(<CommentBox />);
        expect(wrapper.is('div')).to.equal(true);
    });

    it('should render a textarea', () => {
        const wrapper = shallow(<CommentBox />);
        expect(wrapper.find('textarea')).to.have.length(1);
    });

    it('should have action buttons', () => {
        const wrapper = shallow(<CommentBox />);
        expect(wrapper.find('button')).to.have.length(2);
    });
});