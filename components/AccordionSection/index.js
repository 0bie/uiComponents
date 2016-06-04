import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Accordion/index.css';


class AccordionSection extends React.Component {
    static propTypes = {
        /** @type {function} Function triggered when the title is clicked */
        handleToggle: PropTypes.func,
        /** @type {node} Contents of the accordion section */
        children: PropTypes.node,
        /** @type {string} Title of the accordion section */
        title: PropTypes.string,
        /** @type {string} If true, the accordion section will be in an open state */
        isOpen: PropTypes.bool,
        /** @type {object} An object mapping class names from ../Accordion/index.css */
        styles: PropTypes.object
    };

    render() {
        const { title, children, styles, handleToggle, isOpen, ...props } = this.props;
        const activeContent = isOpen ? styles['contentActive'] : '';
        const activeTitle = isOpen ? styles['titleActive'] : '';

        return (
            <section styleName="section" {...props}>
                <h3 styleName="title" className={activeTitle} onClick={handleToggle}>
                    {title}
                </h3>
                <div styleName="content" className={activeContent}
                    aria-hidden={!isOpen} aria-labelledby={title}>
                    {children}
                </div>
            </section>
        );
    }
}

export default CSSModules(AccordionSection, styles);
