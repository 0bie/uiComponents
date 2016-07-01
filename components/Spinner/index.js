import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

const Spinner = ({ size, ...props }) => {
  return (
    <div styleName={size} className={g.center} {...props}>
      <div styleName="spinner">
        <svg styleName="circle" viewBox="25 25 50 50">
         <circle styleName="path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  /** @type {array} Default sizes */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Spinner.defaultProps = {
  size: 'lg'
};

export default CSSModules(Spinner, styles);
