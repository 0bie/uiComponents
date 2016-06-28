import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Button from '../Button';

class Sidebar extends Component {
    static propTypes = {
        /** @type {array} Sidebar items */
        items: PropTypes.array,
        /** @type {array} Sidebar position */
        position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        /** @type {bool} Active state */
        initialIsActive: PropTypes.bool
    }
    static defaultProps = {
        position: 'left',
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
    renderItems() {
        const { items } = this.props;
        if (items && items.length) {
            return items.map((prop, i) => {
                return <a src="#" key={i}> // eslint-disable-line quotes 
                    <li styleName="item">{prop.item}{prop.children}</li>
                </a>;
            });
        }
    }
    render() {
        const { position, ...props } = this.props;
        const isActive = this.state.isActive;
        const sidebarPos = position ? styles[position] : null;
        const active = isActive ? styles['active'] : '';
        return (
            <div>
                <ul styleName="root" className={`${sidebarPos} ${active}`} {...props}>
                    {this.renderItems()}
                </ul>
                <Button size="xl" onClick={this.handleToggleActive}>
                    Toggle Sidebar
                </Button>
            </div>
        );
    }
}

export default CSSModules(Sidebar, styles);