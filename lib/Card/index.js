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

var _icon = require('../utils/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var title = _ref.title;
  var hasFooter = _ref.hasFooter;
  var hasHover = _ref.hasHover;
  var icons = _ref.icons;
  var children = _ref.children;

  var activeFooter = hasFooter && hasHover ? _index2.default.flyOut : '';
  return _react2.default.createElement(
    'div',
    { styleName: 'root' },
    _react2.default.createElement(
      'div',
      { styleName: 'container' },
      _react2.default.createElement(
        'div',
        { styleName: 'item' },
        children
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'content' },
        _react2.default.createElement(
          'h4',
          { styleName: 'title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'desc' },
          'Cards provide context and an entry point to more robust information and views, and their content and quantity can vary greatly. Cards within a card collection can each contain a unique data set, such as a checklist with an action, a note with an action, and a note with a photo..',
          _react2.default.createElement('br', null),
          '-',
          _react2.default.createElement(
            'a',
            { href: 'https://www.google.com/design/spec/components/cards.html#cards-usage' },
            'Google'
          )
        )
      ),
      hasFooter ? _react2.default.createElement(
        'div',
        { styleName: 'footer', className: activeFooter },
        _react2.default.createElement(
          'div',
          { styleName: 'footer-content' },
          (0, _icon.renderIcons)(icons)
        )
      ) : null
    )
  );
};

Card.propTypes = {
  /** @type {node} The CardItem */
  children: _react.PropTypes.node,
  /** @type {string} Card title */
  title: _react.PropTypes.string.isRequired,
  /** @type {bool} If true, the card will have a footer */
  hasFooter: _react.PropTypes.bool,
  /** @type {bool} If true, the card will have hover state */
  hasHover: _react.PropTypes.bool,
  /** @type {array} Icons being rendered in the footer */
  icons: _react.PropTypes.array
};

Card.defaultProps = {
  title: ''
};

exports.default = (0, _reactCssModules2.default)(Card, _index2.default);