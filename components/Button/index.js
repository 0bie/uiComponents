import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Button = ({ children, size, btnStyle, loading, ...props }) => {
    const isLoading = loading ? styles['loading'] : '';
    return (
        <button styleName={size} className={isLoading} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    /** @type {array} Size */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    /** @type {bool} If true, the button will be in a loading state */
    loading: PropTypes.bool,
    /** @type {bool} If true, the button will be in a disabled state */
    disabled: PropTypes.bool,
    /** @type {node} Contents of the button */
    children: PropTypes.node
};

Button.defaultProps = {
    size: 'md'
    // description: data && data.description
};

export default CSSModules(Button, styles, {allowMultiple: true});
