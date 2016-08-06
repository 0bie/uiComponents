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

var _item = require('../utils/item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Menu = function Menu(_ref) {
  var items = _ref.items;
  var header = _ref.header;

  var props = _objectWithoutProperties(_ref, ['items', 'header']);

  return _react2.default.createElement(
    'nav',
    props,
    _react2.default.createElement(
      'ul',
      { styleName: 'menu' },
      header ? _react2.default.createElement(
        'li',
        { styleName: 'header' },
        _react2.default.createElement(
          'span',
          null,
          header
        )
      ) : null,
      (0, _item.renderItems)(items)
    )
  );
};

Menu.propTypes = {
  /** @type {string} Header title*/
  header: _react.PropTypes.string,
  /** @type {array} Items */
  items: _react.PropTypes.array.isRequired
};

Menu.defaultProps = {
  items: []
};

exports.default = (0, _reactCssModules2.default)(Menu, _index2.default);