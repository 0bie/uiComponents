'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _redirect = require('../utils/redirect');

var _redirect2 = _interopRequireDefault(_redirect);

var _index = require('../MainNav/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavForm = function (_Component) {
  _inherits(MainNavForm, _Component);

  function MainNavForm(props) {
    _classCallCheck(this, MainNavForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainNavForm).call(this, props));

    _this.renderOptions = function (options) {
      if (options && options.length) {
        return options.map(function (option, i) {
          return _react2.default.createElement(
            'option',
            { value: '#' + option, key: i },
            '    ',
            option
          );
        });
      }
    };

    _this.handleSelectNav = _this.handleSelectNav.bind(_this);
    return _this;
  }

  _createClass(MainNavForm, [{
    key: 'handleSelectNav',
    value: function handleSelectNav() {
      var value = this.refs.select.value;
      if (value !== '') {
        (0, _redirect2.default)(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options;

      return _react2.default.createElement(
        'form',
        { styleName: 'form', action: true, method: 'post' },
        _react2.default.createElement(
          'select',
          { name: 'nav_select', onChange: this.handleSelectNav, ref: 'select' },
          _react2.default.createElement(
            'option',
            { value: true },
            'Jump to...'
          ),
          this.renderOptions(options)
        )
      );
    }
  }]);

  return MainNavForm;
}(_react.Component);

MainNavForm.propTypes = {
  /** @type {array} Select options */
  options: _react.PropTypes.array.isRequired
};
MainNavForm.defaultProps = {
  options: []
};
exports.default = (0, _reactCssModules2.default)(MainNavForm, _index2.default);