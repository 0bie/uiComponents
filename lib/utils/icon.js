'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIcon = exports.renderIcons = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderIcons = exports.renderIcons = function renderIcons(icons) {
  if (icons && icons.length) {
    return icons.map(function (props, i) {
      return _react2.default.createElement(
        'button',
        { key: i },
        _react2.default.createElement(_Icon2.default, props)
      );
    });
  }
};

var renderIcon = exports.renderIcon = function renderIcon(icon, size) {
  if (icon && icon.length) {
    return _react2.default.createElement(_Icon2.default, { name: icon, size: size, title: icon });
  }
  return icon && _react2.default.createElement(_Icon2.default, icon);
};