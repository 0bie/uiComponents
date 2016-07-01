/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlaylistItem from './index';

describe('<PlaylistItem />', () => {

  it('should render a list', () => {
    const wrapper = shallow(<PlaylistItem />);
    expect(wrapper.is('li')).to.equal(true);
  });

  it('should render details', () => {
    const wrapper = shallow(<PlaylistItem title="test-title" author="test-author" />);
    expect(wrapper.find('span').first().text()).to.equal('test-title -    test-author');
  });

  it('should render action buttons', () => {
    const wrapper = shallow(<PlaylistItem icons={[{name: 'fave3'}, {name: 'share'}]}/>);
    expect(wrapper.find('button')).to.have.length(2);
  });
});