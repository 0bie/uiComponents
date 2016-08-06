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

var Playlist = function (_Component) {
  _inherits(Playlist, _Component);

  function Playlist(props) {
    _classCallCheck(this, Playlist);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Playlist).call(this, props));

    _this.state = {
      currentItem: 0,
      isPlaying: props.initialIsPlaying
    };
    _this.handlePlaylistNext = _this.handlePlaylistNext.bind(_this);
    _this.handlePlaylistPrev = _this.handlePlaylistPrev.bind(_this);
    _this.handlePlaylistPlay = _this.handlePlaylistPlay.bind(_this);
    _this.handlePlaylistStop = _this.handlePlaylistStop.bind(_this);
    return _this;
  }

  _createClass(Playlist, [{
    key: 'handlePlaylistNext',
    value: function handlePlaylistNext() {
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
    key: 'handlePlaylistPrev',
    value: function handlePlaylistPrev() {
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
    key: 'handlePlaylistPlay',
    value: function handlePlaylistPlay() {
      var currentItem = this.state.currentItem;
      if (currentItem === 0) {
        this.setState({ currentItem: currentItem + 1 });
      }
      this.setState({ isPlaying: true });
    }
  }, {
    key: 'handlePlaylistStop',
    value: function handlePlaylistStop() {
      var currentItem = this.state.currentItem;
      if (currentItem !== 0) {
        this.setState({ isPlaying: false });
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var _state = this.state;
      var currentItem = _state.currentItem;
      var isPlaying = _state.isPlaying;

      return _react2.default.Children.map(children, function (child, i) {
        return _react2.default.cloneElement(child, {
          isActive: i + 1 === currentItem,
          isPlay: i + 1 === currentItem && isPlaying
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
          'ol',
          { styleName: 'playlist' },
          this.renderChildren()
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'buttons' },
          _react2.default.createElement(
            'button',
            { onClick: this.handlePlaylistPlay, styleName: 'button' },
            _react2.default.createElement(_index4.default, { name: 'play1', title: 'Play icon', desc: 'a play button' })
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handlePlaylistPrev, styleName: 'button' },
            _react2.default.createElement(_index4.default, { name: 'arrowLeft3', title: 'Left icon', desc: 'a previous button' })
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handlePlaylistNext, styleName: 'button' },
            _react2.default.createElement(_index4.default, { name: 'arrowRight4', title: 'Right icon', desc: 'a next button' })
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handlePlaylistStop, styleName: 'button' },
            _react2.default.createElement(_index4.default, { name: 'stop1', title: 'stop icon', desc: 'a stop button' })
          )
        )
      );
    }
  }]);

  return Playlist;
}(_react.Component);

Playlist.propTypes = {
  /** @type {bool} If true, the playlist item will have an active state */
  isActive: _react.PropTypes.bool.isRequired,
  /** @type {bool} If true, the playlist item will have a playing state */
  initialIsPlaying: _react.PropTypes.bool,
  /** @type {node} Playlist items */
  children: _react.PropTypes.node
};
Playlist.defaultProps = {
  isActive: false,
  initialIsPlaying: false
};
exports.default = (0, _reactCssModules2.default)(Playlist, _index2.default);