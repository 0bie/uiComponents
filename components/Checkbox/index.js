import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

const Checkbox = ({ label, name, id, size, circle, ...props }) => {
  const checkboxSize = size ? styles[size] : '';
  const shape = circle ? styles.circle : null;
  return (
    <label styleName="root">
      <input type="checkbox" name={name} id={id} styleName="checkbox" className={g.a11yText} {...props} />
      <div className={`${checkboxSize} ${shape}`}>{label ? <span styleName="label">{label}</span> : null}</div>
    </label>
  );
};

Checkbox.propTypes = {
  /** @type {string} Label */
  label: PropTypes.string,
  /** @type {name} Name */
  name: PropTypes.string,
  /** @type {string} Id */
  id: PropTypes.string,
  /** @type {array} Default sizes */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** @type {bool} shape */
  circle: PropTypes.bool
};

Checkbox.defaultProps = {
  size: 'md'
};

export default CSSModules(Checkbox, styles);