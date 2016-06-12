import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import redirectToUrl from '../utils/redirect';
import styles from '../MainNav/index.css';

class MainNavForm extends Component {
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
    render() {
        return (
            <form styleName="form" action method="post">
                <select name="nav_select" onChange= {this.handleSelectNav} ref="select">
                    <option value>Jump to...</option>
                    <option value="#accordion">&nbsp;&nbsp;&nbsp;&nbsp;Accordion</option>
                    <option value="#card1">&nbsp;&nbsp;&nbsp;&nbsp;Card 1</option>
                    <option value="#card2">&nbsp;&nbsp;&nbsp;&nbsp;Card 2</option>
                    <option value="#card3">&nbsp;&nbsp;&nbsp;&nbsp;Card 3</option>
                    <option value="#cardlist">&nbsp;&nbsp;&nbsp;&nbsp;Card List</option>
                    <option value="#carousel">&nbsp;&nbsp;&nbsp;&nbsp;Carousel</option>
                    <option value="#commentbox">&nbsp;&nbsp;&nbsp;&nbsp;Comment Box</option>
                    <option value="#image">&nbsp;&nbsp;&nbsp;&nbsp;Image</option>
                    <option value="#list">&nbsp;&nbsp;&nbsp;&nbsp;List</option>
                    <option value="#playlist">&nbsp;&nbsp;&nbsp;&nbsp;Playlist</option>
                    <option value="#spinner">&nbsp;&nbsp;&nbsp;&nbsp;Spinner</option>
                    <option value="#Subscribe">&nbsp;&nbsp;&nbsp;&nbsp;Subscribe Form</option>
                    <option value="#tabset">&nbsp;&nbsp;&nbsp;&nbsp;Tab Set</option>
                </select>
            </form>
        );
    }
}

export default CSSModules(MainNavForm, styles);
