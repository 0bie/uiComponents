import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const MainNav = ({ children, ...props }) => {
  return (
    <div styleName="root">
      <nav {...props}>
        <ul styleName="list">
          <li styleName="item">
            <a href="#">documentation</a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

MainNav.propTypes = {
  /** @type {node} Content(s) within the MainNav */
  children: PropTypes.node
};

export default CSSModules(MainNav, styles);
