/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainNavForm from './index';

describe('<MainNavForm />', () => {

  it('should render a form element', () => {
    const wrapper = shallow(<MainNavForm />);
    expect(wrapper.is('form')).to.equal(true);
  });

  it('should render a select input with options', () => {
    const wrapper = shallow(<MainNavForm />);
    expect(wrapper.find('select')).to.have.length(1);
    expect(wrapper.find('select').childAt(0).type()).to.equal('option');
  });
});