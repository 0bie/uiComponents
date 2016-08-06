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

var _index3 = require('../Icon/index.js');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

    _this.state = { currentItem: 1 };
    _this.handleCarouselNext = _this.handleCarouselNext.bind(_this);
    _this.handleCarouselPrev = _this.handleCarouselPrev.bind(_this);
    return _this;
  }

  _createClass(Carousel, [{
    key: 'handleCarouselNext',
    value: function handleCarouselNext() {
      var maxItems = _react2.default.Children.count(this.props.children);
      var currentItem = this.state.currentItem;
      var nextItem = currentItem + 1;
      if (nextItem > maxItems) {
        nextItem = 1;
      }
      this.setState({
        currentItem: nextItem
      });
    }
  }, {
    key: 'handleCarouselPrev',
    value: function handleCarouselPrev() {
      var maxItems = _react2.default.Children.count(this.props.children);
      var currentItem = this.state.currentItem;
      var prevItem = currentItem - 1;
      if (prevItem < 1) {
        prevItem = maxItems;
      }
      this.setState({
        currentItem: prevItem
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var currentItem = this.state.currentItem;

      return _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          isActive: i + 1 === currentItem
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { styleName: 'root' },
        _react2.default.createElement(
          'div',
          { styleName: 'carousel' },
          _react2.default.createElement(
            'ol',
            null,
            this.renderChildren()
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'buttons' },
          _react2.default.createElement(
            'button',
            { styleName: 'button', onClick: this.handleCarouselPrev },
            _react2.default.createElement(_index4.default, { name: 'arrowLeft1', title: 'left icon', desc: 'a left direction icon', size: 'md' })
          ),
          _react2.default.createElement(
            'button',
            { styleName: 'button', onClick: this.handleCarouselNext },
            _react2.default.createElement(_index4.default, { name: 'arrowRight1', title: 'right icon', desc: 'a right direction icon', size: 'md' })
          )
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  /** @type {node} The Carousel items */
  children: _react.PropTypes.node
};
exports.default = (0, _reactCssModules2.default)(Carousel, _index2.default);