/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SubscribeForm from './index';

describe('<SubscribeForm />', () => {

    it('should render a form', () => {
        const wrapper = shallow(<SubscribeForm />);
        expect(wrapper.find('form')).to.have.length(1);
    });
});