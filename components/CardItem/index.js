import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Card/index.css';

class CardItem extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string
    };
    static defaultProps = {
        image: 'black.jpg',
        href: '/assets/Card/',
        alt: 'Alternate text'
    };
    render() {
        const {href, image} = this.props;
        return (
            <div styleName="item">
                <img src={href + image} alt=""></img>
            </div>
        );
    }
}

export default CSSModules(CardItem, styles);
