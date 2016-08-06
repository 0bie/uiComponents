'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../TabSet/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabSection = function TabSection(_ref) {
  var children = _ref.children;
  var title = _ref.title;
  var styles = _ref.styles;
  var isActive = _ref.isActive;
  var handleToggle = _ref.handleToggle;

  var activeTab = isActive ? styles.tabActive : '';
  var activeSection = isActive ? styles.sectionActive : '';
  return _react2.default.createElement(
    'li',
    { styleName: 'item', className: activeTab, 'aria-hidden': !isActive, onClick: handleToggle },
    _react2.default.createElement(
      'span',
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'section', className: activeSection },
      children
    )
  );
};

TabSection.propTypes = {
  /** @type {node} Title */
  title: _react.PropTypes.node.isRequired,
  /** @type {node} Content with the tab section */
  children: _react.PropTypes.node.isRequired,
  /** @type {bool} If true, the tab section will have an active state */
  isActive: _react.PropTypes.bool.isRequired,
  /** @type {function} Triggered when the tab section item is clicked */
  handleToggle: _react.PropTypes.func,
  /** @type {object} An object mapping class names from ../TabSet/index.css */
  styles: _react.PropTypes.object
};

TabSection.defaultProps = {
  title: '',
  isActive: false
};

exports.default = (0, _reactCssModules2.default)(TabSection, _index2.default);