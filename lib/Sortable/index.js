'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _data = require('./data.json');

var _data2 = _interopRequireDefault(_data);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//placeholder for drop area
var placeholder = document.createElement('li');
placeholder.className = 'placeholder___140zR';

var Sortable = function (_Component) {
  _inherits(Sortable, _Component);

  function Sortable(props) {
    _classCallCheck(this, Sortable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sortable).call(this, props));

    _this.state = {
      data: props.data
    };
    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    return _this;
  }

  _createClass(Sortable, [{
    key: 'handleDragStart',
    value: function handleDragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';

      // Firefox requires calling dataTransfer.setData
      // for the drag to properly work
      e.dataTransfer.setData('text/html', e.currentTarget);
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd() {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      // Update data
      var data = this.state.data;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if (from < to) to--;
      if (this.nodePlacement == 'after') to++;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({ data: data });
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(e) {
      e.preventDefault();
      this.dragged.style.display = 'none';
      if (e.target.className == 'placeholder') return;
      this.over = e.target;
      // Inside the dragOver method
      var relY = e.clientY - this.over.offsetTop;
      var height = this.over.offsetHeight / 2;
      var parent = e.target.parentNode;

      if (relY > height) {
        this.nodePlacement = 'after';
        parent.insertBefore(placeholder, e.target.nextElementSibling);
      } else if (relY < height) {
        this.nodePlacement = 'before';
        parent.insertBefore(placeholder, e.target);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // const { ...props } = this.props;
      var data = this.state.data;
      return _react2.default.createElement(
        'ul',
        { styleName: 'list', onDragOver: this.handleDragOver },
        data.map(function (item, i) {
          return _react2.default.createElement(
            'li',
            {
              styleName: 'item',
              key: i,
              'data-id': i,
              draggable: 'true',
              onDragEnd: _this2.handleDragEnd,
              onDragStart: _this2.handleDragStart
            },
            item
          );
        })
      );
    }
  }]);

  return Sortable;
}(_react.Component);
//


Sortable.propTypes = {
  data: _react.PropTypes.array
};
Sortable.defaultProps = {
  data: _data2.default.colors
};
exports.default = (0, _reactCssModules2.default)(Sortable, _index2.default);