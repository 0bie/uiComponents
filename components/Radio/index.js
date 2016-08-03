import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

const Radio = ({ label, name, ...props }) => {
  return (
    <label styleName="root">
      <input className={g.a11yText} type="radio" name={name} />
      <span styleName="radio" />
      {label ? <span styleName="label">{label}</span> : null}
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
};

Radio.defaultProps = {
  label: 'Radio label'
};

export default CSSModules(Radio, styles);