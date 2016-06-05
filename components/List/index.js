import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const List = ({ children, hasHover, ...props }) => {
    const hover = hasHover ? styles['hasHover'] : '';
    return (
        <ul styleName="root" className={hover} {...props}>
            {children}
        </ul>
    );
};

List.propTypes = {
    /** @type {node} List items */
    children: PropTypes.node,
    /** @type {bool} If true, the list item will have hover state */
    hasHover: PropTypes.bool
};

export default CSSModules(List, styles);
