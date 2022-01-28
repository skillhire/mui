"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Label = function Label(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Hello, World" : _ref$label;
  return /*#__PURE__*/_react["default"].createElement(_material.List, null, /*#__PURE__*/_react["default"].createElement(_material.ListItem, null, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: label
  })));
};

var _default = Label;
exports["default"] = _default;