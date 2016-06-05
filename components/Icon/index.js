import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Icon = ({ href, name, title, desc, size, color, width, height }) => {
    const iconSize = size ? styles[size] : '';
    return (
        <svg styleName="icon" className={iconSize} style={{ fill: color }} width={width} height={height}>
            <title>{title}</title>
            <desc>{desc}</desc>
            <use xlinkHref={href + name}></use>
        </svg>
    );
};

Icon.propTypes = {
    /** @type {string} Relative path to the sprite */
    href: PropTypes.string.isRequired,
    /** @type {string} Name */
    name: PropTypes.string.isRequired,
    /** @type {string} Title */
    title: PropTypes.string.isRequired,
    /** @type {string} Description */
    desc: PropTypes.string,
    /** @type {array} Default sizes */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** @type {string} Fill color */
    color: PropTypes.string,
    /** @type {number} Icon width */
    width: PropTypes.number.isRequired,
    /** @type {number} Icon height */
    height: PropTypes.number.isRequired,
    /** @type {string} class name */
    className: PropTypes.string
};

Icon.defaultProps = {
    href: '/assets/sprite.svg#',
    width: 40,
    height: 40
};

export default CSSModules(Icon, styles);
