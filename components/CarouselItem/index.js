import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Carousel/index.css';

const CarouselItem = ({ children, isActive, styles }) => {
    const activeItem = isActive ? styles['itemActive'] : '';
    return (
        <li styleName="item" className={activeItem} aria-hidden={!isActive}>
            {children}
        </li>
    );
};

CarouselItem.propTypes = {
    /** @type {bool} If true, the CarouselItem will have an active state */
    isActive: PropTypes.bool,
    /** @type {node} Content of the CarouselItem */
    children: PropTypes.node,
    /** @type {object} An object mapping class names from ../Carousel/index.css */
    styles: PropTypes.object
};

export default CSSModules(CarouselItem, styles);
