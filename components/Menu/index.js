import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import { renderItems } from '../utils/item';

const Menu = ({ items, header, ...props }) => {
  return (
    <nav {...props}>
      <ul styleName="menu">
        {header ? <li styleName="header"><span>{header}</span></li> : null}
        {renderItems(items)}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  /** @type {string} Header title*/
  header: PropTypes.string,
  /** @type {array} Items */
  items: PropTypes.array.isRequired
};

Menu.defaultProps = {
  items: []
};

export default CSSModules(Menu, styles);