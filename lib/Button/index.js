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

var _icon = require('../utils/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children;
  var size = _ref.size;
  var shape = _ref.shape;
  var type = _ref.type;
  var isLoading = _ref.isLoading;
  var icon = _ref.icon;
  var iconPosition = _ref.iconPosition;

  var props = _objectWithoutProperties(_ref, ['children', 'size', 'shape', 'type', 'isLoading', 'icon', 'iconPosition']);

  var btnType = type ? _index2.default[type] : '';
  var btnShape = shape ? _index2.default[shape] : '';
  var loading = isLoading ? _index2.default.loading : '';
  return _react2.default.createElement(
    'button',
    _extends({ styleName: size, className: btnType + ' ' + btnShape + ' ' + loading }, props),
    iconPosition === 'left' ? (0, _icon.renderIcon)(icon, size) : null,
    children,
    iconPosition === 'right' ? (0, _icon.renderIcon)(icon, size) : null
  );
};

Button.propTypes = {
  /** @type {array} Size */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** @type {array} Shape */
  shape: _react.PropTypes.oneOf(['circle', 'square']),
  /** @type {array} Type */
  type: _react.PropTypes.oneOf(['raised', 'link']),
  /** @type {bool} If true, the button will be in a loading state */
  isLoading: _react.PropTypes.bool,
  /** @type {bool} If true, the button will be in a disabled state */
  disabled: _react.PropTypes.bool,
  /** @type {node} Contents of the button */
  children: _react.PropTypes.node,
  /** @type {string} Button icon */
  icon: _react.PropTypes.string,
  /** @type {array} Icon position */
  iconPosition: _react.PropTypes.oneOf(['left', 'right'])
};

Button.defaultProps = {
  size: 'md',
  iconPosition: 'left'
};

exports.default = (0, _reactCssModules2.default)(Button, _index2.default);