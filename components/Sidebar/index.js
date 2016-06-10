import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Icon from '../Icon';

class Sidebar extends Component {
    static propTypes = {
        items: PropTypes.array,
        initialIsActive: PropTypes.bool
    }
    static defaultProps = {
        initialIsActive: false
    }
    constructor(props) {
        super(props);
        this.state = {isActive: props.initialIsActive};
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({isActive: true});
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
        const { position, SidebarPos, handleToggle, ...props } = this.props;
        const sidebarPos = position ? styles[sidebarPos] : null;
        return (
            <div>
            <ul styleName="root" className={sidebarPos}>
                {this.renderItems()}
            </ul>
            {/*<button onClick={this.handleToggle()}>Toggle Sidebar</button>*/}
            </div>
        );
    }
}

export default CSSModules(Sidebar, styles);