/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Image from './index';

describe('<Image />', () => {

    it('should render an image', () => {
        const wrapper = shallow(<Image />);
        expect(wrapper.is('figure')).to.equal(true);
        expect(wrapper.find('img')).to.have.length(1)
    });

    it('should render a caption', () => {
        const wrapper = shallow(<Image caption="test-caption" />);
        expect(wrapper.find('figcaption').text()).to.equal('test-caption');
    });
});