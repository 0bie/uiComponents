import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

const Image = ({ size, shape, alt, caption, ...props }) => {
  const imgSize = size ? styles[size] : '';
  const imgShape = shape ? styles[shape] : '';
  return (
    <figure styleName="root" className={imgSize}>
      <img alt={alt} className={imgShape} {...props} />
      {caption ? <figcaption styleName="foot">{caption}</figcaption> : null}
    </figure>
  );
};

Image.propTypes = {
  /** @type {array} Default sizes */
  size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xl']),
  /** @type {string} The shape of the image */
  shape: PropTypes.string,
  /** @type {string} The image caption */
  caption: PropTypes.string,
  /** @type {string} Alternate text */
  alt: PropTypes.string.isRequired
};

Image.defaultProps = {
  file: '',
  alt: ''
};

export default CSSModules(Image, styles);