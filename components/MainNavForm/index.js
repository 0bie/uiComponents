import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import redirectToUrl from '../utils/redirect';
import styles from '../MainNav/index.css';

class MainNavForm extends Component {
  static propTypes = {
    /** @type {array} Select options */
    options: PropTypes.array.isRequired
  }
  static defaultProps = {
    options: []
  }
  constructor(props) {
    super(props);
    this.handleSelectNav = this.handleSelectNav.bind(this);
  }
  handleSelectNav(){
    const value = this.refs.select.value;
    if (value !== '') {
      redirectToUrl(value);
    }
  }
  renderOptions = (options) => {
    if (options && options.length) {
      return options.map((option, i) => {
        return <option value={`#${option}`} key={i}>&nbsp;&nbsp;&nbsp;&nbsp;{option}</option>;
      });
    }
  };
  render() {
    const { options } = this.props;
    return (
      <form styleName="form" action method="post">
        <select name="nav_select" onChange= {this.handleSelectNav} ref="select">
          <option value>Jump to...</option>
          {this.renderOptions(options)}
        </select>
      </form>
    );
  }
}

export default CSSModules(MainNavForm, styles);
