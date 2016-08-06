'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('../Playlist/index.css');

var _index2 = _interopRequireDefault(_index);

var _icon = require('../utils/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlaylistItem = function PlaylistItem(_ref) {
  var title = _ref.title;
  var author = _ref.author;
  var duration = _ref.duration;
  var icons = _ref.icons;
  var isActive = _ref.isActive;
  var isPlay = _ref.isPlay;
  var styles = _ref.styles;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['title', 'author', 'duration', 'icons', 'isActive', 'isPlay', 'styles', 'children']);

  var activeItem = isActive && isPlay ? styles.itemActive : '';
  return _react2.default.createElement(
    'li',
    _extends({ styleName: 'item', className: activeItem }, props),
    _react2.default.createElement(
      'span',
      { styleName: 'title' },
      title,
      '   -    ',
      author
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'icons' },
      (0, _icon.renderIcons)(icons)
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'duration' },
      duration
    ),
    children
  );
};

PlaylistItem.propTypes = {
  /** @type {string} Title */
  title: _react.PropTypes.string,
  /** @type {string} Author */
  author: _react.PropTypes.string,
  /** @type {string} Duration */
  duration: _react.PropTypes.string,
  /** @type {bool} If true, the playlist item will have an active state */
  isActive: _react.PropTypes.bool,
  /** @type {bool} If true, the playlist item will have a play state */
  isPlay: _react.PropTypes.bool,
  /** @type {array} Icons rendered within the playlist item */
  icons: _react.PropTypes.array,
  /** @type {object} An object mapping class names from ../Playlist/index.css */
  styles: _react.PropTypes.object,
  /** @type {node} Other content(s) placed within the playlist item */
  children: _react.PropTypes.node
};

PlaylistItem.defaultProps = {
  icons: [{ name: 'fave3', title: 'Favorite icon', desc: 'a favorite button', color: '#fff', size: 'sm' }, { name: 'share', title: 'Share icon', desc: 'a share button', color: '#fff', size: 'sm' }, { name: 'volumeMute', title: 'Mute icon', desc: 'a mute button', color: '#fff', size: 'sm' }]
};

exports.default = (0, _reactCssModules2.default)(PlaylistItem, _index2.default);