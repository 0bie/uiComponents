import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Cardlist/index.css';
import renderIcons from '../utils/renderIcons';

class CardlistItem extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired ,
        image: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        handleSelect: PropTypes.func,
        icons: PropTypes.array,
        children: PropTypes.node,
        styles: PropTypes.object
    };
    static defaultProps = {
        href: '/assets/',
        isActive: false,
        icons:[
            {name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm'},
            {name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm'},
            {name: 'volumeMute', title: 'Mute icon', desc: 'a mute button', color: '#fff', size: 'sm'}
        ]
    };
    render() {
        const {title, subtitle, details, href, image, icons, styles, isActive, handleSelect} = this.props;
        const activeItem = isActive ? styles['itemActive'] : '';
        const activeDesc = isActive ? styles['descActive'] : '';
        const activeOptions = isActive ? styles['optionsActive'] : '';
        return (
            <li styleName="item" className={activeItem} onMouseOver={handleSelect}>
                <div styleName="content">
                    <a href="#" styleName="overlay"></a>
                    <img src={href + image} alt=""></img>
                    <div styleName="options" className={activeOptions}>
                        {renderIcons(icons)}
                    </div>
                </div>
                <div styleName="desc" className={activeDesc}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <div>{details}</div>
                </div>
            </li>
        );
    }
}

export default CSSModules(CardlistItem, styles);
