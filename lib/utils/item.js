"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderItems = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderItems = exports.renderItems = function renderItems(items) {
  if (items && items.length) {
    return items.map(function (item, i) {
      return _react2.default.createElement(
        "li",
        { styleName: "item", key: i },
        item.title,
        item.children
      );
    });
  }
};