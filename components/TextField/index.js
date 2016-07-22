import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Form/index.css';

const TextField = ({ ...props }) => {
  return <textarea styleName="textarea" {...props} />;
};

TextField.propTypes = {
  /** @type {node} children */
  children: PropTypes.node,
  /** @type {string} Label */
  label: PropTypes.string,
  /** @type {string} Hint */
  hint: PropTypes.string
};

export default CSSModules(TextField, styles);
