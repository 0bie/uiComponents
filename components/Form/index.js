import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Form = ({ children, ...props }) => {
  return <form styleName="root" {...props}>{children}</form>;
};

Form.propTypes = {
  /** @type {node} children */
  children: PropTypes.node,
  /** @type {array} Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default CSSModules(Form, styles);