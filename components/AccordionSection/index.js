import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../Accordion/index.css';

const AccordionSection = ({ title, children, styles, handleToggle, isOpen, ...props }) => {
  const activeContent = isOpen ? styles.contentActive : '';
  const activeTitle = isOpen ? styles.titleActive : '';
  return (
    <section styleName="section" {...props}>
      <h3 styleName="title" className={activeTitle} onClick={handleToggle}>
        {title}
      </h3>
      <div styleName="content" className={activeContent} aria-hidden={!isOpen} aria-labelledby={title}>
        {children}
      </div>
    </section>
  );
};

AccordionSection.propTypes = {
  /** @type {function} Function triggered when the title is clicked */
  handleToggle: PropTypes.func,
  /** @type {node} Contents of the accordion section */
  children: PropTypes.node,
  /** @type {string} Title of the accordion section */
  title: PropTypes.string,
  /** @type {bool} If true, the accordion section will be in an open state */
  isOpen: PropTypes.bool,
  /** @type {object} An object mapping class names from ../Accordion/index.css */
  styles: PropTypes.object
};

export default CSSModules(AccordionSection, styles);
