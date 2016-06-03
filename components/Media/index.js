import React, { PropTypes } from 'react';
import data from './data.json';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Media extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        description: PropTypes.node,
        children: PropTypes.node
    };
    static defaultProps = {
        title: data.title,
        description: data.description
    };
    render() {
        const { children, title, description, ...props } = this.props;
        return (
            <div styleName="root" {...props}>
                <div styleName="item">
                    {children}
                </div>
                <div styleName="content">
                    {title ? <h4 styleName="title">{title}</h4> : null}
                    {description ? <div>{description}</div> : null}
                </div>
            </div>
        );
    }
}

export default CSSModules(Media, styles);
