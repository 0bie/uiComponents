import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Accordion extends React.Component {
  static propTypes = {
    /** @type {node} Sections within the accordion */
    children: PropTypes.node.isRequired,
    /** @type {bool} If true, the AccordionSection will be in an open state */
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
    this.setState({ isOpen });
  }
  renderChildren() {
    const { children } = this.props;
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
      <div styleName="root">
        {this.renderChildren()}
      </div>
    );
  }
}

export default CSSModules(Accordion, styles);
