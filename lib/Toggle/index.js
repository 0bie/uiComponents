'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Toggle = require('./Toggle.css');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Toggle = function Toggle(_ref) {
  var name = _ref.name;

  var props = _objectWithoutProperties(_ref, ['name']);

  // if (size) className =  s. + size;
  //  if (size) classNames += ' ' + s.`toggle--${size}`;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', _extends({ styleName: 'toggle', id: 'toggle-' + name, type: 'checkbox' }, props)),
    _react2.default.createElement('label', { styleName: 'label', htmlFor: 'toggle-' + name })
  );
};

Toggle.propTypes = {
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg']),
  name: _react.PropTypes.string
};

exports.default = (0, _reactCssModules2.default)(Toggle, _Toggle2.default);