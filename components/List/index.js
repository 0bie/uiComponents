import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const List = ({ children, ...props }) => {
    return (
        <ul styleName="root" {...props}>
            {children}
        </ul>
    );
};

List.propTypes = {
    children: PropTypes.node,
    hover: PropTypes.bool
};

export default CSSModules(List, styles);
