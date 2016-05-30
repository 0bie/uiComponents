import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Icon extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string,
        size: PropTypes.oneOf(['sm', 'md', 'lg']),
        color: PropTypes.string,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        className: PropTypes.string
    };
    static defaultProps = {
        href: '/assets/Sprite/Sprite.svg#',
        width: '40',
        height: '40'
    };
    render() {
        const { href, name, title, desc, size, color, width, height } = this.props;
        const iconSize = size ? styles[size] : '';
        return (
            <svg styleName="icon" className={iconSize} style={{ fill: color }} width={width} height={height}>
                <title>{title}</title>
                <desc>{desc}</desc>
                <use xlinkHref={href + name}></use>
            </svg>
        );
    }
}

export default CSSModules(Icon, styles);
