'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var href = _ref.href;
  var name = _ref.name;
  var title = _ref.title;
  var desc = _ref.desc;
  var size = _ref.size;
  var color = _ref.color;
  var width = _ref.width;
  var height = _ref.height;

  var iconSize = size ? _index2.default[size] : '';
  return _react2.default.createElement(
    'svg',
    { styleName: 'icon', className: iconSize, style: { fill: color }, width: width, height: height },
    _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'desc',
      null,
      desc
    ),
    _react2.default.createElement('use', { xlinkHref: href + name })
  );
};

Icon.propTypes = {
  /** @type {string} Relative path to the sprite */
  href: _react.PropTypes.string.isRequired,
  /** @type {string} Name */
  name: _react.PropTypes.string.isRequired,
  /** @type {string} Title */
  title: _react.PropTypes.string.isRequired,
  /** @type {string} Description */
  desc: _react.PropTypes.string,
  /** @type {array} Default sizes */
  size: _react.PropTypes.oneOf(['sm', 'md', 'lg']),
  /** @type {string} Fill color */
  color: _react.PropTypes.string,
  /** @type {number} Icon width */
  width: _react.PropTypes.number.isRequired,
  /** @type {number} Icon height */
  height: _react.PropTypes.number.isRequired,
  /** @type {string} class name */
  className: _react.PropTypes.string
};

Icon.defaultProps = {
  href: '/assets/sprite.svg#',
  width: 40,
  height: 40
};

exports.default = (0, _reactCssModules2.default)(Icon, _index2.default);