import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Icon from '../Icon/index.js';

class Card extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string.isRequired
    };
    static defaultProps = {
        title: ''
    };
    render() {
        const {title, children} = this.props;
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
                <div styleName="footer">
                    <div styleName="content">
                        <Icon name="fave3" title="favorite icon" desc="a favorite/save icon" size="md" color="white"/>
                        <Icon name="share" title="share icon" desc="a share icon" color="white" size="md"/>
                        <Icon name="ellipsis" title="ellipsis icon" desc="an ellipsis icon" color="white" size="md" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(Card, styles);
