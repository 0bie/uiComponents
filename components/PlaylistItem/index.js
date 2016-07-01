import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Playlist/index.css';
import { renderIcons } from '../utils/icon';

const PlaylistItem = ({ title, author, duration, icons, isActive, isPlay, styles, children, ...props }) => {
  const activeItem = isActive && isPlay ? styles.itemActive : '';
  return (
    <li styleName="item" className={activeItem} {...props}>
      <span styleName="title">{title} &nbsp;&nbsp;- &nbsp;&nbsp; {author}</span>
      <span styleName="icons">
          {renderIcons(icons)}
      </span>
      <span styleName="duration">{duration}</span>
      {children}
    </li>
  );
};

PlaylistItem.propTypes = {
  /** @type {string} Title */
  title: PropTypes.string,
  /** @type {string} Author */
  author: PropTypes.string,
  /** @type {string} Duration */
  duration: PropTypes.string,
  /** @type {bool} If true, the playlist item will have an active state */
  isActive: PropTypes.bool,
  /** @type {bool} If true, the playlist item will have a play state */
  isPlay: PropTypes.bool,
  /** @type {array} Icons rendered within the playlist item */
  icons: PropTypes.array,
  /** @type {object} An object mapping class names from ../Playlist/index.css */
  styles: PropTypes.object,
  /** @type {node} Other content(s) placed within the playlist item */
  children: PropTypes.node
};

PlaylistItem.defaultProps = {
  icons:[
      {name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm'},
      {name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm'},
      {name: 'volumeMute', title: 'Mute icon', desc: 'a mute button', color: '#fff', size: 'sm'}
  ]
};

export default CSSModules(PlaylistItem, styles);
