import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Image = ({ size, shape, src, altText, caption, ...props}) => {
    const imgSize = size ? styles[size] : '';
    const imgShape = shape ? styles[shape] : '';
    return (
        <figure styleName="root" className={imgSize}>
            <img src={src} alt={altText} className={imgShape} {...props} />
            {caption ? <figcaption styleName="foot">{caption}</figcaption> : null}
        </figure>
    );
};

Image.propTypes = {
    size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xl']),
    shape: PropTypes.string,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    altText: PropTypes.string.isRequired
};

Image.defaultProps = {
    file: '',
    altText: ''
};

export default CSSModules(Image, styles);