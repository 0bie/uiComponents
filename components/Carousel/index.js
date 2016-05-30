import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Icon from '../Icon/index.js';

class Carousel extends Component {
    static propTypes = {
        children: PropTypes.node
    }
    constructor(props) {
        super(props);
        this.state = { currentItem: 1 };
        this.handleCarouselNext = this.handleCarouselNext.bind(this);
        this.handleCarouselPrev = this.handleCarouselPrev.bind(this);
    }
    handleCarouselNext() {
        const maxItems = React.Children.count(this.props.children);
        const currentItem = this.state.currentItem;
        let nextItem = currentItem + 1;
        if (nextItem > maxItems){
            nextItem = 1;
        }
        this.setState({
            currentItem: nextItem
        });
    }
    handleCarouselPrev() {
        const maxItems = React.Children.count(this.props.children);
        const currentItem = this.state.currentItem;
        let prevItem = currentItem - 1;
        if (prevItem < 1){
            prevItem = maxItems;
        }
        this.setState({
            currentItem: prevItem
        });
    }
    renderChildren() {
        const { children} = this.props;
        const { currentItem } = this.state;
        return React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
                isActive: i + 1 === currentItem
            });
        });
    }
    render() {
        return (
            <div styleName="root">
                <div styleName="carousel">
                    <ol>
                        {this.renderChildren()}
                    </ol>
                </div>
                <div styleName="buttons">
                    <button styleName="button" onClick={this.handleCarouselPrev}>
                        <Icon name="arrowLeft1" title="left icon" desc="a left direction icon" size="md"/>
                    </button>
                    <button styleName="button" onClick={this.handleCarouselNext}>
                        <Icon name="arrowRight1" title="right icon" desc="a right direction icon" size="md"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default CSSModules(Carousel, styles);
