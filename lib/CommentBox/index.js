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

var CommentBox = function (_Component) {
  _inherits(CommentBox, _Component);

  function CommentBox(props) {
    _classCallCheck(this, CommentBox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this, props));

    _this.state = {
      text: props.initialText,
      photoAdded: props.initialPhotoAdded
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleTogglePhoto = _this.handleTogglePhoto.bind(_this);
    return _this;
  }

  _createClass(CommentBox, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'handleTogglePhoto',
    value: function handleTogglePhoto() {
      var photoAdded = this.state.photoAdded;
      this.setState({ photoAdded: !photoAdded });
    }
  }, {
    key: 'updateCharacters',
    value: function updateCharacters() {
      var photoAdded = this.state.photoAdded;
      var textLength = this.state.text.length;
      var wordCount = this.props.wordCount;
      var photoCount = this.props.photoCount;
      if (photoAdded) {
        return wordCount - photoCount - textLength;
      } else {
        return wordCount - textLength;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var styles = _props.styles;
      var wordCount = _props.wordCount;

      var text = this.state.text;
      var photoAdded = this.state.photoAdded;
      var updateChars = this.updateCharacters();
      var lowCount = text.length > wordCount ? styles['low-count'] : '';

      return _react2.default.createElement(
        'div',
        { styleName: 'root' },
        _react2.default.createElement('textarea', { styleName: 'textarea', onChange: this.handleChange }),
        _react2.default.createElement(
          'div',
          { className: lowCount },
          this.updateCharacters()
        ),
        _react2.default.createElement(
          'button',
          { styleName: 'button', disabled: updateChars === wordCount || updateChars < 0 },
          'Comment'
        ),
        _react2.default.createElement(
          'button',
          { styleName: 'button', onClick: this.handleTogglePhoto },
          photoAdded ? '✓ Photo Added' : 'Add Photo'
        )
      );
    }
  }]);

  return CommentBox;
}(_react.Component);

CommentBox.propTypes = {
  /** @type {string} The inital content of the comment box */
  initialText: _react.PropTypes.string.isRequired,
  /** @type {bool} If true, the `photoCount`will be subtracted from the word count */
  initialPhotoAdded: _react.PropTypes.bool.isRequired,
  /** @type {number} The maximum number of characters allowed in the comment box */
  wordCount: _react.PropTypes.number.isRequired,
  /** @type {number} The number of characters that a photo contains */
  photoCount: _react.PropTypes.number.isRequired,
  /** @type {object} An object mapping class names from ./index.css */
  styles: _react.PropTypes.object
};
CommentBox.defaultProps = {
  initialText: '',
  initialPhotoAdded: false,
  wordCount: 350,
  photoCount: 23
};
exports.default = (0, _reactCssModules2.default)(CommentBox, _index2.default);