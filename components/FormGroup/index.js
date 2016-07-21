import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Form/index.css';

const FormGroup = ({ title, children, ...props }) => {
  return <fieldset styleName="form-group" {...props}>
    {title ? <div styleName="title">{title}</div> : null}
    {children}
  </fieldset>;
};

FormGroup.propTypes = {
  /** @type {node} children */
  children: PropTypes.node,
  /** @type {string} title */
  title: PropTypes.string
};

export default CSSModules(FormGroup, styles);