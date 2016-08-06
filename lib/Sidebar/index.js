'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _item = require('../utils/item');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));

    _this.state = {
      isActive: props.initialIsActive
    };
    _this.handleToggleActive = _this.handleToggleActive.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'handleToggleActive',
    value: function handleToggleActive() {
      var isActive = this.state.isActive;
      this.setState({ isActive: !isActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var position = _props.position;
      var items = _props.items;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['position', 'items', 'children']);

      var isActive = this.state.isActive;
      var sidebarPos = position ? _index2.default[position] : null;
      var active = isActive ? _index2.default.active : '';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          _extends({ styleName: 'root', className: sidebarPos + ' ' + active }, props),
          children || (0, _item.renderItems)(items)
        ),
        _react2.default.createElement(
          _Button2.default,
          { size: 'xl', onClick: this.handleToggleActive },
          'Toggle Sidebar'
        )
      );
    }
  }]);

  return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
  /** @type {array} Sidebar items */
  items: _react.PropTypes.array,
  /** @type {array} Sidebar position */
  position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** @type {bool} Active state */
  initialIsActive: _react.PropTypes.bool,
  /** @type {node} Children */
  children: _react.PropTypes.node
};
Sidebar.defaultProps = {
  position: 'left',
  initialIsActive: false
};
exports.default = (0, _reactCssModules2.default)(Sidebar, _index2.default);