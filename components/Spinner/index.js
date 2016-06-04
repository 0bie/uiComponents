import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';

class Spinner extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['sm', 'md', 'lg'])
    }
    static defaultProps = {
        size: 'lg'
    }
    render() {
        const {size, ...props} = this.props;
        return (
            <div styleName={size} className={g.center}>
                <div styleName="spinner" {...props}>
                    <svg styleName="circle" viewBox="25 25 50 50">
                     <circle styleName="path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default CSSModules(Spinner, styles);
