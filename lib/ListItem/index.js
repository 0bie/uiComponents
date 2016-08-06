'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../List/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ListItem = function ListItem(_ref) {
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'li',
    _extends({ styleName: 'item' }, props),
    children
  );
};

ListItem.propTypes = {
  /** @type {node} Content with the list item */
  children: _react.PropTypes.node
};

exports.default = (0, _reactCssModules2.default)(ListItem, _index2.default);