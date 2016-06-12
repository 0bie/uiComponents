import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Sidebar extends Component {
    static propTypes = {
        /** @type {array} Sidebar items */
        items: PropTypes.array,
        /** @type {string} Sidebar position */
        position: PropTypes.string
    }
    renderItems() {
        const { items } = this.props;
        if (items && items.length) {
            return items.map((prop, i) => {
                return <a key={i}>
                    <li styleName="item">{prop.item}{prop.children}</li>
                </a>;
            });
        }
    }
    render() {
        const { position, ...props } = this.props;
        const sidebarPos = position ? styles[position] : null;
        return (
            <div>
            <ul styleName="root" className={sidebarPos} {...props}>
                {this.renderItems()}
            </ul>
            <button onClick={this.handleToggle}>Toggle Sidebar</button>
            </div>
        );
    }
}

export default CSSModules(Sidebar, styles);