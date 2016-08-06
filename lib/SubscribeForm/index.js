'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubscribeForm = function SubscribeForm(_ref) {
  var placeholder = _ref.placeholder;
  var message = _ref.message;
  var action = _ref.action;

  return _react2.default.createElement(
    'form',
    { styleName: 'form' },
    _react2.default.createElement(
      'label',
      { styleName: 'label' },
      _react2.default.createElement(
        'span',
        { styleName: 'title' },
        placeholder
      ),
      _react2.default.createElement(_Input2.default, { type: 'email', name: 'subscribe_email', placeholder: placeholder, size: 'lg', required: true }),
      _react2.default.createElement(
        _Button2.default,
        { size: 'lg' },
        action
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Checkbox2.default, { label: message, size: 'sm', defaultChecked: true })
    )
  );
};

SubscribeForm.propTypes = {
  /** @type {string} Input placeholder */
  placeholder: _react.PropTypes.string.isRequired,
  /** @type {string} Opt in or confirmation message */
  message: _react.PropTypes.string.isRequired,
  /** @type {string} Call to action text */
  action: _react.PropTypes.string.isRequired
};

SubscribeForm.defaultProps = {
  placeholder: 'Your Email Address',
  message: 'An opt-in (confirmation) message',
  action: 'Subscribe'
};

exports.default = (0, _reactCssModules2.default)(SubscribeForm, _index2.default);