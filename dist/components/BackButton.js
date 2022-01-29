"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BackButton = function BackButton(_ref) {
  var onClick = _ref.onClick;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    smUp: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.goBack
  }, onClick && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onClick,
    className: classes.backButton
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.ChevronLeft, null))));
};

var _default = BackButton;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    goBack: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 50
    },
    backButton: {
      color: theme.palette.secondary.main
    }
  };
});