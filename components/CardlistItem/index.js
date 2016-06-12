import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Cardlist/index.css';
import { renderIcons } from '../utils/icon';

const CardlistItem = ({ title, subtitle, details, icons, styles, isActive, handleSelect, children, ...props }) => {
    const activeItem = isActive ? styles['itemActive'] : '';
    const activeDesc = isActive ? styles['descActive'] : '';
    const activeOptions = isActive ? styles['optionsActive'] : '';
    return (
        <li styleName="item" className={activeItem} onMouseOver={handleSelect} {...props}>
            <div styleName="content">
                <a href="#" styleName="overlay"></a>
                {children}
                <div styleName="options" className={activeOptions}>
                    {renderIcons(icons)}
                </div>
            </div>
            <div styleName="desc" className={activeDesc}>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <div>{details}</div>
            </div>
        </li>
    );
};

CardlistItem.propTypes = {
    /** @type {string} CardlistItem title */
    title: PropTypes.string.isRequired,
    /** @type {string} CardlistItem sub-title */
    subtitle: PropTypes.string.isRequired,
    /** @type {string} CardlistItem details */
    details: PropTypes.string.isRequired,
    /** @type {bool} If true, the CardlistItem will have an active state */
    isActive: PropTypes.bool.isRequired,
    /** @type {function} Function triggered when the CardlistItem is hovered */
    handleSelect: PropTypes.func,
    /** @type {array} Icons being rendered as call to actions */
    icons: PropTypes.array,
    /** @type {node} The main content of the CardlistItem */
    children: PropTypes.node,
    /** @type {object} An object mapping class names from ../Cardlist/index.css */
    styles: PropTypes.object
};

CardlistItem.defaultProps = {
    isActive: false,
    icons:[
        {name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm'},
        {name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm'},
        {name: 'ellipsis', title: 'Ellipses icon', desc: 'a more options button', color: '#fff', size: 'sm'}
    ]
};

export default CSSModules(CardlistItem, styles);
