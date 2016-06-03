import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Image = ({ className, size, shape, src, alt, caption, ...props}) => {
    const imgSize = size ? styles[size] : '';
    const imgShape = shape ? styles[shape] : '';
    return (
        <figure styleName="root" className={imgSize}>
            <img src={src} alt={alt} className={imgShape} />
            {caption ? <figcaption styleName="foot">{caption}</figcaption> : null}
        </figure>
    );
};

Image.PropTypes = {
    size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xl']),
    shape: PropTypes.string,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    placeholder: PropTypes.string.isRequired
};

Image.defaultProps = {
    file: '',
    placeholder: ''
};

export default CSSModules(Image, styles);