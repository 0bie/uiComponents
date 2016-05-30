import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Carousel/index.css';


class CarouselItem extends React.Component {
    static propTypes = {
        isActive: PropTypes.bool,
        children: PropTypes.node,
        styles: PropTypes.object
    };
    render() {
        const {children, isActive, styles} = this.props;
        const activeItem = isActive ? styles['itemActive'] : '';
        return (
            <li styleName="item" className={activeItem} aria-hidden={!isActive}>
                {children}
            </li>
        );
    }
}

export default CSSModules(CarouselItem, styles);
