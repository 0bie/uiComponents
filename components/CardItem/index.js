import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Card/index.css';

const CardItem = ({ children, ...props }) => {
    return(
        <div {...props}>
            {children}
        </div>
    );
};

CardItem.propTypes = {
    /** @type {node} Content(s) of the CardItem */
    children: PropTypes.node
};

export default CSSModules(CardItem, styles);
