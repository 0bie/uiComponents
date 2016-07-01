import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../List/index.css';

const ListItem = ({ children, ...props }) => {
  return (
    <li styleName="item" {...props}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  /** @type {node} Content with the list item */
  children: PropTypes.node
};

export default CSSModules(ListItem, styles);
