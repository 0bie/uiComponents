'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Card/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardItem = function CardItem(_ref) {
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'div',
    props,
    children
  );
};

CardItem.propTypes = {
  /** @type {node} Content(s) of the CardItem */
  children: _react.PropTypes.node
};

exports.default = (0, _reactCssModules2.default)(CardItem, _index2.default);