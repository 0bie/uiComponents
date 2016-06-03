import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import renderIcons from '../utils/renderIcons';

class Card extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string.isRequired,
        footer: PropTypes.bool,
        icons: PropTypes.array
    };
    static defaultProps = {
        title: ''
    };
    render() {
        const {title, footer, icons, children} = this.props;
        return (
            <div styleName="card">
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
            {/*{ renderFoot(['twitter', 'facebook']) }*/}
            { footer ?
                <div styleName="footer">
                    <div styleName="content">
                        {renderIcons(icons)}
                    </div>
                </div>
            : null}
            </div>
        );
    }
}

export default CSSModules(Card, styles);
