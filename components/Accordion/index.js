import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Accordion extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        initialIsOpen: PropTypes.bool
    };
    static defaultProps = {
        title: '',
        initialIsOpen: false
    };
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.initialIsOpen
        };
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
    }
    handleToggleOpen(isOpen) {
        // const {children} = this.props;
        this.setState({ isOpen });
    }
    renderChildren() {
        const { children} = this.props;
        const { isOpen } = this.state;
        const handleToggleOpen = this.handleToggleOpen;
        return React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                isOpen: i + 1 === isOpen,
                handleToggle() {
                    handleToggleOpen(i + 1);
                }
            });
        });
    }

    render() {
        return (
            <div styleName="accordion">
              {this.renderChildren()}
            </div>
        );
    }
}

export default CSSModules(Accordion, styles);
