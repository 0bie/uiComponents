'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Accordion/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AccordionSection = function AccordionSection(_ref) {
  var title = _ref.title;
  var children = _ref.children;
  var styles = _ref.styles;
  var handleToggle = _ref.handleToggle;
  var isOpen = _ref.isOpen;

  var props = _objectWithoutProperties(_ref, ['title', 'children', 'styles', 'handleToggle', 'isOpen']);

  var activeContent = isOpen ? styles.contentActive : '';
  var activeTitle = isOpen ? styles.titleActive : '';
  return _react2.default.createElement(
    'section',
    _extends({ styleName: 'section' }, props),
    _react2.default.createElement(
      'h3',
      { styleName: 'title', className: activeTitle, onClick: handleToggle },
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content', className: activeContent, 'aria-hidden': !isOpen, 'aria-labelledby': title },
      children
    )
  );
};

AccordionSection.propTypes = {
  /** @type {function} Function triggered when the title is clicked */
  handleToggle: _react.PropTypes.func,
  /** @type {node} Contents of the accordion section */
  children: _react.PropTypes.node,
  /** @type {string} Title of the accordion section */
  title: _react.PropTypes.string,
  /** @type {bool} If true, the accordion section will be in an open state */
  isOpen: _react.PropTypes.bool,
  /** @type {object} An object mapping class names from ../Accordion/index.css */
  styles: _react.PropTypes.object
};

exports.default = (0, _reactCssModules2.default)(AccordionSection, _index2.default);