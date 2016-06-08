/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardItem from './index';

describe('<CardItem />', () => {

    it('should render a div', () => {
        const wrapper = shallow(<CardItem />);
        expect(wrapper.is('div')).to.equal(true);
    });

    it('should render children', () => {
        const wrapper = shallow(<CardItem><img /></CardItem>);
        console.log(wrapper.debug());
        expect(wrapper.find('img')).to.have.length(1)
    });
});