import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../List/index.css';

const ListItem = ({ children, ...props }) => {
    return (
        <li styleName="item" {...props}>
            {children}
        </li>
    );
}

ListItem.propTypes = {
    children: PropTypes.node
}

export default CSSModules(ListItem, styles);
