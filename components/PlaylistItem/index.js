import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Playlist/index.css';
import Icon from '../Icon/index.js';

class PlaylistItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        artist: PropTypes.string,
        duration: PropTypes.string,
        isActive: PropTypes.bool,
        isPlay: PropTypes.bool,
        styles: PropTypes.object,
        children: PropTypes.node
    }

    render() {
        const {title, artist, duration, isActive, isPlay, styles} = this.props;
        const activeItem = isActive && isPlay ? styles['itemActive'] : '';
        return (
            <li styleName="item" className={activeItem}>
                <span styleName="title">{title} &nbsp;&nbsp;- &nbsp;&nbsp; {artist}</span>
                <span styleName="icons">
                    <button>
                        <Icon name="fave3" title="stop icon" desc="a favorite button" size="sm"/>
                    </button>
                    <button>
                        <Icon name="share" title="share icon" desc="a share button" size="sm"/>
                    </button>
                    <button>
                        <Icon name="volumeMute" title="stop icon" desc="a mute button" size="sm"/>
                    </button>
                </span>
                <span styleName="duration">{duration}</span>
            </li>
        );
    }
}

export default CSSModules(PlaylistItem, styles);
