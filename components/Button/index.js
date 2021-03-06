import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import { renderIcon } from '../utils/icon';

const Button = ({ children, size, shape, type, isLoading, icon, iconPosition, ...props }) => {
  const btnType = type ? styles[type] : '';
  const btnShape = shape ? styles[shape] : '';
  const loading = isLoading ? styles.loading : '';
  return (
    <button styleName={size} className={`${btnType} ${btnShape} ${loading}`} {...props}>
      {iconPosition === 'left' ? renderIcon(icon, size) : null}
      {children}
      {iconPosition === 'right' ? renderIcon(icon, size) : null}
    </button>
  );
};

Button.propTypes = {
  /** @type {array} Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** @type {array} Shape */
  shape: PropTypes.oneOf(['circle', 'square']),
  /** @type {array} Type */
  type: PropTypes.oneOf(['raised', 'link']),
  /** @type {bool} If true, the button will be in a loading state */
  isLoading: PropTypes.bool,
  /** @type {bool} If true, the button will be in a disabled state */
  disabled: PropTypes.bool,
  /** @type {node} Contents of the button */
  children: PropTypes.node,
  /** @type {string} Button icon */
  icon: PropTypes.string,
  /** @type {array} Icon position */
  iconPosition: PropTypes.oneOf(['left', 'right'])
};

Button.defaultProps = {
  size: 'md',
  iconPosition: 'left'
};

export default CSSModules(Button, styles);