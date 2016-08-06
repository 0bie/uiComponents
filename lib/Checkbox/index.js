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

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label;
  var name = _ref.name;
  var id = _ref.id;
  var size = _ref.size;
  var circle = _ref.circle;

  var props = _objectWithoutProperties(_ref, ['label', 'name', 'id', 'size', 'circle']);

  var checkboxSize = size ? _index2.default[size] : '';
  var shape = circle ? _index2.default.circle : null;
  return _react2.default.createElement(
    'label',
    { styleName: 'root' },
    _react2.default.createElement('input', _extends({ type: 'checkbox', name: name, id: id, styleName: 'checkbox' }, props)),
    _react2.default.createElement(
      'div',
      { className: checkboxSize + ' ' + shape },
      label ? _react2.default.createElement(
        'span',
        { styleName: 'label' },
        label
      ) : null
    )
  );
};

Checkbox.propTypes = {
  /** @type {string} Label */
  label: _react.PropTypes.string,
  /** @type {name} Name */
  name: _react.PropTypes.string,
  /** @type {string} Id */
  id: _react.PropTypes.string,
  /** @type {array} Default sizes */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg']),
  /** @type {bool} shape */
  circle: _react.PropTypes.bool
};

Checkbox.defaultProps = {
  size: 'md'
};

exports.default = (0, _reactCssModules2.default)(Checkbox, _index2.default);