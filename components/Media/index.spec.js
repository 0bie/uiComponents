/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Media from './index';

describe('<Media />', () => {

    it('should render a media object', () => {
        const wrapper = shallow(<Media />);
        expect(wrapper.is('div')).to.equal(true);
    });

    it('should render a media item', () => {
        const wrapper = shallow(<Media><img /></Media>);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should render content', () => {
        const wrapper = shallow(<Media title="test-title" description="test-description"/>);
        expect(wrapper.find('h4').text()).to.equal('test-title');
        expect(wrapper.containsAnyMatchingElements([<div>test-description</div>])).to.equal(true);
    });
});