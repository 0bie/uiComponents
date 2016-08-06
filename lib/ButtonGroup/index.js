'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Button/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children;
  var display = _ref.display;

  var props = _objectWithoutProperties(_ref, ['children', 'display']);

  return _react2.default.createElement(
    'div',
    _extends({ styleName: display }, props),
    children
  );
};

ButtonGroup.propTypes = {
  /** @type {node} Buttons */
  children: _react.PropTypes.node.isRequired,
  /** @type {array} Display */
  display: _react.PropTypes.oneOf(['inline', 'block']).isRequired
};

ButtonGroup.defaultProps = {
  display: 'inline'
};

exports.default = (0, _reactCssModules2.default)(ButtonGroup, _index2.default);