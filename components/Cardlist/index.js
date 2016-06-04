import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';


class Cardlist extends React.Component {
    static propTypes = {
        /** @type {node} Contents of the Cardlist */
        children: PropTypes.node.isRequired
    };
    constructor(props) {
        super(props);
        this.state = { activeItem: null };
        this.handleSelectItem = this.handleSelectItem.bind(this);
        this.handleClearItem = this.handleClearItem.bind(this);
    }
    handleSelectItem(activeItem) {
        this.setState({ activeItem });
    }
    handleClearItem() {
        this.setState({ activeItem: null });
    }
    renderChildren() {
        const { children} = this.props;
        const { activeItem } = this.state;
        const handleSelectItem = this.handleSelectItem;
        return React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                isActive: i + 1 === activeItem,
                handleSelect() {
                    handleSelectItem(i + 1);
                }
            });
        });
    }
    render() {
        return (
            <ul styleName="root" onMouseOut={this.handleClearItem}>
                {this.renderChildren()}
            </ul>
        );
    }
}

export default CSSModules(Cardlist, styles);
