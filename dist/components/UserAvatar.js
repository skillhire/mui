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

var UserAvatar = function UserAvatar(_ref) {
  var src = _ref.src,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'circle' : _ref$variant;
  var classes = useStyles({
    size: size,
    src: src
  });
  return /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    variant: variant,
    color: "primary",
    className: classes.avatar,
    src: src
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.User, {
    className: classes.icon,
    size: size
  }));
};

var _default = UserAvatar;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    avatar: {
      backgroundColor: function backgroundColor(props) {
        return props.src ? 'transparent' : theme.palette.common.white;
      },
      width: function width(props) {
        return props.size;
      },
      height: function height(props) {
        return props.size;
      }
    },
    icon: {
      color: theme.palette.text.secondary,
      width: function width(props) {
        return props.size / 2;
      },
      height: function height(props) {
        return props.size / 2;
      },
      maxHeight: 32,
      maxWidth: 32
    }
  };
});