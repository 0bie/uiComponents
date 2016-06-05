import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

const Container = ({ title, description, children, ...props }) => {
    return (
        <section styleName="container" className={g.border} {...props}>
            {title ?
                <header>
                    <h1 styleName="title">{title}</h1>
                </header> :
            null}
            {description ? <div styleName="description">{description}</div> : null}
            {children}
        </section>
    );
};

Container.propTypes = {
    /** @type {string} The title of the content within the container */
    title: PropTypes.string,
    /** @type {node} A description of the content within the container */
    description: PropTypes.node,
    /** @type {node} Content(s) of the container */
    children: PropTypes.node
};

export default CSSModules(Container, styles);
