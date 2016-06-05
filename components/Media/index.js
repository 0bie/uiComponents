import React, { PropTypes } from 'react';
import data from './data.json';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Media = ({ children, title, description, ...props }) => {
    return (
        <div styleName="root" {...props}>
            <div styleName="item">
                {children}
            </div>
            <div styleName="content">
                {title ? <h4 styleName="title">{title}</h4> : null}
                {description ? <div>{description}</div> : null}
            </div>
        </div>
    );
};

Media.propTypes = {
    /** @type {node} Title */
    title: PropTypes.node,
    /** @type {node} Description */
    description: PropTypes.node,
    /** @type {node} Media item */
    children: PropTypes.node
};

Media.defaultProps = {
    title: data.title,
    description: data.description
};

export default CSSModules(Media, styles);
