import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Accordion/index.css';


class AccordionSection extends React.Component {
    static propTypes = {
        handleToggle: PropTypes.func,
        children: PropTypes.node,
        title: PropTypes.string,
        isOpen: PropTypes.bool,
        styles: PropTypes.object
    };

    render() {
        const { title, children, styles, handleToggle, isOpen } = this.props;
        const activeContent = isOpen ? styles['contentActive'] : '';
        const activeTitle = isOpen ? styles['titleActive'] : '';

        return (
            <section styleName="section">
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
