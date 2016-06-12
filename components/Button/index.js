import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Icon from '../Icon';
import {renderIcon} from '../utils/icon';

const Button = ({ children, size, shape, type, isLoading, icon, iconPos, ...props }) => {
    const btnType = type ? styles[type] : '';
    const btnShape = shape ? styles[shape] : '';
    const loading = isLoading ? styles['loading'] : '';
    let btnClasses = btnType;
    if (btnShape) btnClasses += ' ' + btnShape;
    if (loading) btnClasses += ' ' + loading;
    return (
        <button styleName={size} className={btnClasses} {...props}>
            {iconPos === 'left' ? renderIcon(icon, size) : null}
            {children}
            {iconPos === 'right' ? renderIcon(icon, size) : null}
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
    iconPos: PropTypes.oneOf(['left', 'right']),

};

Button.defaultProps = {
    size: 'md',
    iconPos: 'left'
};

export default CSSModules(Button, styles, {allowMultiple: true});