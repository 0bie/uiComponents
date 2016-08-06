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

var Spinner = function Spinner(_ref) {
  var size = _ref.size;

  var props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement(
    'div',
    _extends({ styleName: size }, props),
    _react2.default.createElement(
      'div',
      { styleName: 'spinner' },
      _react2.default.createElement(
        'svg',
        { styleName: 'circle', viewBox: '25 25 50 50' },
        _react2.default.createElement('circle', { styleName: 'path', cx: '50', cy: '50', r: '20', fill: 'none', 'stroke-miterlimit': '10' })
      )
    )
  );
};

Spinner.propTypes = {
  /** @type {array} Default sizes */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg'])
};

Spinner.defaultProps = {
  size: 'lg'
};

exports.default = (0, _reactCssModules2.default)(Spinner, _index2.default);