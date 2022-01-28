"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LineItem = function LineItem(_ref) {
  var Icon = _ref.icon,
      primary = _ref.primary,
      secondary = _ref.secondary,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'textSecondary' : _ref$color,
      _ref$disablePadding = _ref.disablePadding,
      disablePadding = _ref$disablePadding === void 0 ? false : _ref$disablePadding,
      secondaryAction = _ref.secondaryAction,
      onClick = _ref.onClick;
  var classes = useStyles({
    size: size,
    color: color
  });
  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: onClick ? true : false,
    disableGutters: true,
    disablePadding: disablePadding,
    onClick: onClick ? onClick : null
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    className: classes.icon
  })), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: primary,
    secondary: secondary
  }), secondaryAction && /*#__PURE__*/_react["default"].createElement(_material.ListItemSecondaryAction, null, secondaryAction));
};

var _default = LineItem;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      height: function height(props) {
        return props.size;
      },
      width: function width(props) {
        return props.size;
      },
      marginLeft: theme.spacing(1),
      color: function color(props) {
        return props.color == 'primary' ? theme.palette.primary.main : theme.palette.text.secondary;
      }
    }
  };
});