import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Button from '../Button';

class List extends Component {
    static propTypes = {
        /** @type {node} List items */
        children: PropTypes.node,
        /** @type {bool} If true, the list item will have hover state */
        hasHover: PropTypes.bool,
        /** @type {bool} If true, the list will have an active state */
        initialIsActive: PropTypes.bool
    }
    static defaultProps = {
        initialIsActive: false
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
        const { children, hasHover, ...props } = this.props;
        const hover = hasHover ? styles['hasHover'] : '';
        const isActive = this.state.isActive;
        const activeList = isActive ? styles['active'] : '';
        return (
            <ul styleName="root" className={`${hover} ${activeList}`} {...props}>
                {children}
                <Button size="sm" onClick={this.handleToggleActive}>
                  {isActive ? 'Show Less' : 'Show More'}
                </Button>
            </ul>
        );
    }
}

export default CSSModules(List, styles);
