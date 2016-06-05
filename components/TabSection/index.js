import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../TabSet/index.css';

const TabSection = ({ children, title, styles, isActive, handleToggle }) => {
    const activeTab = isActive ? styles['tabActive'] : '';
    const activeSection = isActive ? styles['sectionActive'] : '';
    return (
        <li styleName="item" className={activeTab} aria-hidden={!isActive} onClick={handleToggle}>
            <span>{title}</span>
            <div styleName="section" className={activeSection}>
                {children}
            </div>
        </li>
    );
};

TabSection.propTypes = {
    /** @type {node} Title */
    title: PropTypes.node.isRequired,
    /** @type {node} Content with the tab section */
    children: PropTypes.node.isRequired,
    /** @type {bool} If true, the tab section will have an active state */
    isActive: PropTypes.bool.isRequired,
    /** @type {function} Triggered when the tab section item is clicked */
    handleToggle: PropTypes.func,
    /** @type {object} An object mapping class names from ../TabSet/index.css */
    styles: PropTypes.object
};

TabSection.defaultProps = {
    title: '',
    isActive: false
};

export default CSSModules(TabSection, styles);
