"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MuiButton = function MuiButton(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Hello, World" : _ref$label;
  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "primary",
    variant: "contained"
  }, label);
};

var _default = MuiButton;
exports["default"] = _default;