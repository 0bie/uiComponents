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

var Container = function Container(_ref) {
  var title = _ref.title;
  var description = _ref.description;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['title', 'description', 'children']);

  return _react2.default.createElement(
    'section',
    _extends({ styleName: 'container' }, props),
    title ? _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'h1',
        { styleName: 'title' },
        title
      )
    ) : null,
    description ? _react2.default.createElement(
      'div',
      { styleName: 'description' },
      description
    ) : null,
    children
  );
};

Container.propTypes = {
  /** @type {string} The title of the content within the container */
  title: _react.PropTypes.string,
  /** @type {node} A description of the content within the container */
  description: _react.PropTypes.node,
  /** @type {node} Content(s) of the container */
  children: _react.PropTypes.node
};

exports.default = (0, _reactCssModules2.default)(Container, _index2.default);