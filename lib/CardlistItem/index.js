'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Cardlist/index.css');

var _index2 = _interopRequireDefault(_index);

var _icon = require('../utils/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardlistItem = function CardlistItem(_ref) {
  var title = _ref.title;
  var subtitle = _ref.subtitle;
  var details = _ref.details;
  var icons = _ref.icons;
  var styles = _ref.styles;
  var isActive = _ref.isActive;
  var handleSelect = _ref.handleSelect;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['title', 'subtitle', 'details', 'icons', 'styles', 'isActive', 'handleSelect', 'children']);

  var activeItem = isActive ? styles.itemActive : '';
  var activeDesc = isActive ? styles.descActive : '';
  var activeOptions = isActive ? styles.optionsActive : '';
  return _react2.default.createElement(
    'li',
    _extends({ styleName: 'item', className: activeItem, onMouseOver: handleSelect }, props),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      _react2.default.createElement('a', { href: '#', styleName: 'overlay' }),
      children,
      _react2.default.createElement(
        'div',
        { styleName: 'options', className: activeOptions },
        (0, _icon.renderIcons)(icons)
      )
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'desc', className: activeDesc },
      _react2.default.createElement(
        'h3',
        null,
        title
      ),
      _react2.default.createElement(
        'h4',
        null,
        subtitle
      ),
      _react2.default.createElement(
        'div',
        null,
        details
      )
    )
  );
};

CardlistItem.propTypes = {
  /** @type {string} CardlistItem title */
  title: _react.PropTypes.string.isRequired,
  /** @type {string} CardlistItem sub-title */
  subtitle: _react.PropTypes.string.isRequired,
  /** @type {string} CardlistItem details */
  details: _react.PropTypes.string.isRequired,
  /** @type {bool} If true, the CardlistItem will have an active state */
  isActive: _react.PropTypes.bool.isRequired,
  /** @type {function} Function triggered when the CardlistItem is hovered */
  handleSelect: _react.PropTypes.func,
  /** @type {array} Icons being rendered as call to actions */
  icons: _react.PropTypes.array,
  /** @type {node} The main content of the CardlistItem */
  children: _react.PropTypes.node,
  /** @type {object} An object mapping class names from ../Cardlist/index.css */
  styles: _react.PropTypes.object
};

CardlistItem.defaultProps = {
  isActive: false,
  icons: [{ name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm' }, { name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm' }, { name: 'ellipsis', title: 'Ellipses icon', desc: 'a more options button', color: '#fff', size: 'sm' }]
};

exports.default = (0, _reactCssModules2.default)(CardlistItem, _index2.default);