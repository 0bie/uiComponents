import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';

const SubscribeForm = ({ placeholder, message, action }) => {
  return (
    <form styleName="form">
      <label styleName="label">
        <span styleName="title">{placeholder}</span>
        <Input type="email" name="subscribe_email" placeholder={placeholder} size="lg" required />
        <Button size="lg">{action}</Button>
      </label>
      <div>
        <Checkbox label={message} size="sm" defaultChecked />
      </div>
    </form>
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