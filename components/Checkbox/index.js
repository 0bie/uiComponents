import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

const Checkbox = ({ label, name, id, ...props }) => {
  return (
    <label styleName="root">
      <input type="checkbox" name={name} id={id} className={g.a11yText}/>
      <span styleName="checkbox" />
      {label ? <span styleName="label">{label}</span> : null}
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
};

Checkbox.defaultProps = {
  label: 'Checkbox label'
};

export default CSSModules(Checkbox, styles);