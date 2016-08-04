import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Radio = ({ label, name, size, ...props }) => {
  const radioSize = size ? styles[size] : null;
  return (
    <label styleName="root">
      <input type="radio" name={name} styleName="radio" {...props} />
      <div className={radioSize}>{label ? <span styleName="label">{label}</span> : null}</div>
    </label>
  );
};

Radio.propTypes = {
  /** @type {string} Label */
  label: PropTypes.string,
  /** @type {name} Name */
  name: PropTypes.string,
  /** @type {string} Id */
  id: PropTypes.string,
  /** @type {array} Default sizes */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Radio.defaultProps = {
  size: 'md'
};

export default CSSModules(Radio, styles);