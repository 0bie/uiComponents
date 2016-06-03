import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const List = ({ hover, children, ...props }) => {
    const listHover = hover ? styles['hover'] : '';
    return (
        <ul styleName="root" className={listHover} {...props}>
            {children}
        </ul>
    );
}

List.propTypes = {
    hover: PropTypes.bool
}

export default CSSModules(List, styles);
