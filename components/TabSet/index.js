import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

class TabSet extends Component {
    static propTypes = {
        children: PropTypes.node
    }
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
        this.handleToggleActive = this.handleToggleActive.bind(this);
    }
    handleToggleActive(activeTab) {
        this.setState({ activeTab });
    }
    renderChildren() {
        const { children} = this.props;
        const { activeTab } = this.state;
        const handleToggleActive = this.handleToggleActive;
        return React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                isActive: i + 1 === activeTab,
                handleToggle() {
                    handleToggleActive(i + 1);
                }
            });
        });
    }

    render() {
        return <section className={g.clearBottomLg}>
            <ul styleName="list">
                {this.renderChildren()}
            </ul>
        </section>;
    }
}

export default CSSModules(TabSet, styles);
