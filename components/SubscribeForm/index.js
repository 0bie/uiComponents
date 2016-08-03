import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import g from '../global.css';
import Checkbox from '../Checkbox';

const SubscribeForm = ({ placeholder, message, action }) => {
  return (
    <div styleName="root">
      <form styleName="form">
        <label styleName="label">
          <span className={g.a11yText}>{placeholder}</span>
          <input styleName="input-email" type="email" name="subscribe_email" placeholder={placeholder} required/>
        </label>
        <input styleName="button" type="submit" value={action}/>
        <div styleName="message">
          <Checkbox label={message} />
        </div>
      </form>
    </div>
  );
};

SubscribeForm.propTypes = {
  /** @type {string} Input placeholder */
  placeholder: PropTypes.string.isRequired,
  /** @type {string} Opt in or confirmation message */
  message: PropTypes.string.isRequired,
  /** @type {string} Call to action text */
  action: PropTypes.string.isRequired
};

SubscribeForm.defaultProps = {
  placeholder: 'Your Email Address',
  message: 'An opt-in (confirmation) message',
  action: 'Subscribe'
};

export default CSSModules(SubscribeForm, styles);
