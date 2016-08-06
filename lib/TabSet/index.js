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

var TabSet = function (_Component) {
  _inherits(TabSet, _Component);

  function TabSet(props) {
    _classCallCheck(this, TabSet);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabSet).call(this, props));

    _this.state = { activeTab: 1 };
    _this.handleToggleActive = _this.handleToggleActive.bind(_this);
    return _this;
  }

  _createClass(TabSet, [{
    key: 'handleToggleActive',
    value: function handleToggleActive(activeTab) {
      this.setState({ activeTab: activeTab });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var activeTab = this.state.activeTab;

      var handleToggleActive = this.handleToggleActive;
      return _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          isActive: i + 1 === activeTab,
          handleToggle: function handleToggle() {
            handleToggleActive(i + 1);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { styleName: 'root' },
        _react2.default.createElement(
          'ul',
          { styleName: 'list' },
          this.renderChildren()
        )
      );
    }
  }]);

  return TabSet;
}(_react.Component);

TabSet.propTypes = {
  /** @type {node} Tab sections */
  children: _react.PropTypes.node
};
exports.default = (0, _reactCssModules2.default)(TabSet, _index2.default);