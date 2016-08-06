'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Carousel/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselItem = function CarouselItem(_ref) {
  var children = _ref.children;
  var isActive = _ref.isActive;
  var styles = _ref.styles;

  var activeItem = isActive ? styles.itemActive : '';
  return _react2.default.createElement(
    'li',
    { styleName: 'item', className: activeItem, 'aria-hidden': !isActive },
    children
  );
};

CarouselItem.propTypes = {
  /** @type {bool} If true, the CarouselItem will have an active state */
  isActive: _react.PropTypes.bool,
  /** @type {node} Content of the CarouselItem */
  children: _react.PropTypes.node,
  /** @type {object} An object mapping class names from ../Carousel/index.css */
  styles: _react.PropTypes.object
};

exports.default = (0, _reactCssModules2.default)(CarouselItem, _index2.default);