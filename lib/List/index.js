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

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

    _this.state = {
      isActive: props.initialIsActive
    };
    _this.handleToggleActive = _this.handleToggleActive.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: 'handleToggleActive',
    value: function handleToggleActive() {
      var isActive = this.state.isActive;
      this.setState({ isActive: !isActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var items = _props.items;
      var hasHover = _props.hasHover;
      var isExpandable = _props.isExpandable;

      var props = _objectWithoutProperties(_props, ['children', 'items', 'hasHover', 'isExpandable']);

      var isActive = this.state.isActive;
      var hover = hasHover ? _index2.default.hasHover : '';
      var expandable = isExpandable ? _index2.default.expandable : '';
      var activeList = isActive ? _index2.default.active : '';
      return _react2.default.createElement(
        'ul',
        _extends({ styleName: 'root', className: hover + ' ' + expandable + ' ' + activeList }, props),
        children || (0, _item.renderItems)(items),
        isExpandable ? _react2.default.createElement(
          _Button2.default,
          { size: 'sm', onClick: this.handleToggleActive },
          isActive ? 'Show Less' : 'Show More'
        ) : null
      );
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  /** @type {node} List items */
  children: _react.PropTypes.node,
  /** @type {bool} If true, the list item will have hover state */
  hasHover: _react.PropTypes.bool,
  /** @type {bool} If true, the list will have an expandable state */
  isExpandable: _react.PropTypes.bool,
  /** @type {bool} If true, the list will have expandable properties */
  initialIsActive: _react.PropTypes.bool,
  /** @type {array} A list of items */
  items: _react.PropTypes.array
};
List.defaultProps = {
  initialIsActive: false,
  items: []
};
exports.default = (0, _reactCssModules2.default)(List, _index2.default);