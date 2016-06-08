import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import renderIcons from '../utils/renderIcons';

class Card extends React.Component {
    static propTypes = {
        /** @type {node} The CardItem */
        children: PropTypes.node,
        /** @type {string} Card title */
        title: PropTypes.string.isRequired,
        /** @type {bool} If true, the card will have a footer */
        hasFooter: PropTypes.bool,
        /** @type {bool} If true, the card will have hover state */
        hasHover: PropTypes.bool,
        /** @type {array} Icons being rendered in the footer */
        icons: PropTypes.array
    };
    static defaultProps = {
        title: ''
    };
    render() {
        const {title, hasFooter, hasHover, icons, children} = this.props;
        const activeFooter = hasFooter && hasHover ? styles['flyOut'] : '';
        return (
            <div styleName="root">
                <div styleName="container">
                    <div styleName="item">
                        {children}
                    </div>
                    <div styleName="content">
                        <h4 styleName="title">{title}</h4>
                        <div styleName="desc">
                            Cards provide context and an entry point to more robust information and views, and their content and quantity can vary greatly. Cards within a card collection can each contain a unique data set, such as a checklist with an action, a note with an action, and a note with a photo..
                            <br/>-<a href="https://www.google.com/design/spec/components/cards.html#cards-usage">Google</a>
                        </div>
                    </div>
                    { hasFooter ?
                        <div styleName="footer" className={activeFooter}>
                            <div styleName="footer-content">
                                {renderIcons(icons)}
                            </div>
                        </div>
                    : null}
                </div>
            </div>
        );
    }
}

export default CSSModules(Card, styles);
