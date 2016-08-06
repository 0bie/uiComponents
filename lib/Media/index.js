'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Media = function Media(_ref) {
  var children = _ref.children;
  var title = _ref.title;
  var description = _ref.description;

  var props = _objectWithoutProperties(_ref, ['children', 'title', 'description']);

  return _react2.default.createElement(
    'div',
    _extends({ styleName: 'root' }, props),
    _react2.default.createElement(
      'div',
      { styleName: 'item' },
      children
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      title ? _react2.default.createElement(
        'h4',
        { styleName: 'title' },
        title
      ) : null,
      description ? _react2.default.createElement(
        'div',
        null,
        description
      ) : null
    )
  );
};

Media.propTypes = {
  /** @type {node} Title */
  title: _react.PropTypes.node,
  /** @type {node} Description */
  description: _react.PropTypes.node,
  /** @type {node} Media item */
  children: _react.PropTypes.node
};

Media.defaultProps = {
  title: _data2.default && _data2.default.title,
  description: _data2.default && _data2.default.description
};

exports.default = (0, _reactCssModules2.default)(Media, _index2.default);