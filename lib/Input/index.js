'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(_ref) {
  var size = _ref.size;
  var type = _ref.type;
  var disabled = _ref.disabled;

  var props = _objectWithoutProperties(_ref, ['size', 'type', 'disabled']);

  return _react2.default.createElement('input', _extends({ styleName: size, type: type, disabled: disabled }, props));
};

Input.propTypes = {
  /** @type {string} Input type */
  type: _react.PropTypes.string,
  /** @type {bool} If true, the input will have  a disabled state */
  disabled: _react.PropTypes.bool,
  /** @type {array} Size */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** @type {string} Placeholder */
  placeholder: _react.PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  size: 'md'
};

exports.default = (0, _reactCssModules2.default)(Input, _index2.default);