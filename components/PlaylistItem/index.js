import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Playlist/index.css';
import renderIcons from '../utils/renderIcons';

class PlaylistItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        artist: PropTypes.string,
        duration: PropTypes.string,
        isActive: PropTypes.bool,
        isPlay: PropTypes.bool,
        icons: PropTypes.array,
        styles: PropTypes.object,
        children: PropTypes.node
    }
    static defaultProps = {
        icons:[
            {name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm'},
            {name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm'},
            {name: 'volumeMute', title: 'Mute icon', desc: 'a mute button', color: '#fff', size: 'sm'}
        ]
    }
    render() {
        const {title, artist, duration, icons, isActive, isPlay, styles} = this.props;
        const activeItem = isActive && isPlay ? styles['itemActive'] : '';
        return (
            <li styleName="item" className={activeItem}>
                <span styleName="title">{title} &nbsp;&nbsp;- &nbsp;&nbsp; {artist}</span>
                <span styleName="icons">
                    {renderIcons(icons)}
                </span>
                <span styleName="duration">{duration}</span>
            </li>
        );
    }
}

export default CSSModules(PlaylistItem, styles);
