"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MobileButton = function MobileButton(_ref) {
  var startIcon = _ref.startIcon,
      onClick = _ref.onClick,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      variant = _ref.variant,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    smDown: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: variant,
    color: color,
    startIcon: startIcon,
    onClick: onClick
  }, children)), /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    smUp: true
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    variant: variant,
    color: color,
    onClick: onClick
  }, startIcon)));
};

var _default = MobileButton;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {}
  };
});