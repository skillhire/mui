"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ButtonLoader() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 20,
    className: classes.loader
  });
}

var _default = ButtonLoader;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    loader: {
      color: theme.palette.common.white
    }
  };
});