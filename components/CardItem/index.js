import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Card/index.css';

class CardItem extends React.Component {
    static propTypes = {
        /** @type {node} Content(s) of the CardItem */
        children: PropTypes.node
    };
    render() {
        const { children, ...props } = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        );
    }
}

export default CSSModules(CardItem, styles);
