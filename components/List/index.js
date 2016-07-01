import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Button from '../Button';
import { renderItems } from '../utils/item';

class List extends Component {
    static propTypes = {
        /** @type {node} List items */
        children: PropTypes.node,
        /** @type {bool} If true, the list item will have hover state */
        hasHover: PropTypes.bool,
        /** @type {bool} If true, the list will have an active state */
        isExpandable: PropTypes.bool,
        /** @type {bool} If true, the list will have expandable properties */
        initialIsActive: PropTypes.bool,
        /** @type {array} A list of items */
        items: PropTypes.array
    }
    static defaultProps = {
        initialIsActive: false,
        items: []
    }
    constructor(props) {
        super(props);
        this.state = {
            isActive: props.initialIsActive
        };
        this.handleToggleActive = this.handleToggleActive.bind(this);
    }
    handleToggleActive() {
        const isActive = this.state.isActive;
        this.setState({isActive: !isActive});
    }
    render() {
        const { children, items, hasHover, isExpandable, ...props } = this.props;
        const hover = hasHover ? styles['hasHover'] : '';
        const expandable = isExpandable ? styles['expandable'] : '';
        const isActive = this.state.isActive;
        const activeList = isActive ? styles['active'] : '';
        return (
            <ul styleName="root" className={`${hover} ${expandable} ${activeList}`} {...props}>
                {children || renderItems(items)}
                {isExpandable ?
                    <Button size="sm" onClick={this.handleToggleActive}>
                        {isActive ? 'Show Less' : 'Show More'}
                    </Button>
                : null}
            </ul>
        );
    }
}

export default CSSModules(List, styles);
