'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

    _this.state = {
      isOpen: props.initialIsOpen
    };
    _this.handleToggleOpen = _this.handleToggleOpen.bind(_this);
    return _this;
  }

  _createClass(Accordion, [{
    key: 'handleToggleOpen',
    value: function handleToggleOpen(isOpen) {
      this.setState({ isOpen: isOpen });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var isOpen = this.state.isOpen;

      var handleToggleOpen = this.handleToggleOpen;
      return _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          isOpen: i + 1 === isOpen,
          handleToggle: function handleToggle() {
            handleToggleOpen(i + 1);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { styleName: 'root' },
        this.renderChildren()
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

Accordion.propTypes = {
  /** @type {node} Sections within the accordion */
  children: _react.PropTypes.node.isRequired,
  /** @type {bool} If true, the AccordionSection will be in an open state */
  initialIsOpen: _react.PropTypes.bool
};
Accordion.defaultProps = {
  title: '',
  initialIsOpen: false
};
exports.default = (0, _reactCssModules2.default)(Accordion, _index2.default);