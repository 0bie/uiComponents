import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Form/index.css';

const FormField = ({ label, hint, size, children }) => {
  const fieldSize = size ? styles[size] : null;
  return (
    <div styleName="form-field" className={fieldSize}>
      <label styleName="label">
        {label}
        {hint ? <small styleName="hint">{hint}</small> : null}
      </label>
      {children}
    </div>
  );
};

FormField.propTypes = {
  /** @type {node} children */
  children: PropTypes.node,
  /** @type {string} Label */
  label: PropTypes.string,
  /** @type {string} Hint */
  hint: PropTypes.string,
  /** @type {string} Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default CSSModules(FormField, styles);
