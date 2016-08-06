'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Form/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormField = function FormField(_ref) {
  var label = _ref.label;
  var hint = _ref.hint;
  var size = _ref.size;
  var children = _ref.children;

  var fieldSize = size ? _index2.default[size] : null;
  return _react2.default.createElement(
    'div',
    { styleName: 'form-field', className: fieldSize },
    _react2.default.createElement(
      'label',
      { styleName: 'label' },
      label,
      hint ? _react2.default.createElement(
        'small',
        { styleName: 'hint' },
        hint
      ) : null
    ),
    children
  );
};

FormField.propTypes = {
  /** @type {node} children */
  children: _react.PropTypes.node,
  /** @type {string} Label */
  label: _react.PropTypes.string,
  /** @type {string} Hint */
  hint: _react.PropTypes.string,
  /** @type {string} Size */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg'])
};

exports.default = (0, _reactCssModules2.default)(FormField, _index2.default);