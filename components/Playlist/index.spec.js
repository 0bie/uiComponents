/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Playlist from './index';
import PlaylistItem from '../PlaylistItem';

describe('<Playlist />', () => {

    it('should render a list', () => {
        const wrapper = shallow(<Playlist />);
        expect(wrapper.find('ol')).to.have.length(1);
    });

    it('should render action buttons', () => {
        const wrapper = shallow(<Playlist  />);
        expect(wrapper.find('button')).to.have.length(4);
    });

    it('should render items', () => {
        const wrapper = shallow(<Playlist><PlaylistItem /></Playlist>);
        expect(wrapper.find(PlaylistItem)).to.have.length(1);
    });
});