'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Form/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FormGroup = function FormGroup(_ref) {
  var title = _ref.title;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['title', 'children']);

  return _react2.default.createElement(
    'fieldset',
    _extends({ styleName: 'form-group' }, props),
    title ? _react2.default.createElement(
      'div',
      { styleName: 'title' },
      title
    ) : null,
    children
  );
};

FormGroup.propTypes = {
  /** @type {node} children */
  children: _react.PropTypes.node,
  /** @type {string} title */
  title: _react.PropTypes.string
};

exports.default = (0, _reactCssModules2.default)(FormGroup, _index2.default);