import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Button/index.css';

const ButtonGroup = ({ children, display, ...props }) => {
    return (
        <div styleName={display} {...props}>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    /** @type {node} Buttons */
    children: PropTypes.node.isRequired,
    /** @type {array} Display */
    display: PropTypes.oneOf(['inline', 'block']).isRequired
};

ButtonGroup.defaultProps = {
    display: 'inline'
};

export default CSSModules(ButtonGroup, styles);