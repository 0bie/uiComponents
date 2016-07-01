import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Input = ({ size, type, disabled, ...props }) => {
  return <input styleName={size} type={type} disabled={disabled} {...props} />;
};

Input.propTypes = {
  /** @type {string} Input type */
  type: PropTypes.node,
  /** @type {bool} If true, the input will have  a disabled state */
  disabled: PropTypes.bool,
  /** @type {array} Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** @type {string} Placeholder */
  placeholder: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: 'text',
  size: 'md',
  placeholder: ''
};

export default CSSModules(Input, styles);
