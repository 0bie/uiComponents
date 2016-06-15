import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Input/index.css';

const InputGroup = ({ display, children, ...props }) => {
    return <div styleName={display} {...props}>{children}</div>;
};

InputGroup.propTypes = {
    /** @type {string} InputGroup dislay */
    display: PropTypes.string,
    /** @type {bool} If true, the input will have  a disabled state */
    disabled: PropTypes.bool
};

InputGroup.defaultProps = {
    display: 'inline'
};

export default CSSModules(InputGroup, styles);
