"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListItemButton = function ListItemButton(_ref) {
  var onClick = _ref.onClick,
      image = _ref.image,
      Icon = _ref.icon,
      primary = _ref.primary,
      secondary = _ref.secondary,
      secondaryAction = _ref.secondaryAction;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: onClick ? true : false,
    className: classes.listItem,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, Icon && /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    variant: "rounded",
    className: classes.avatar
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: classes.icon
  })), image && /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    className: classes.image
  })), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: primary,
    secondary: secondary
  }), secondaryAction && /*#__PURE__*/_react["default"].createElement(_material.ListItemSecondaryAction, null, secondaryAction));
};

var _default = ListItemButton;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      color: theme.palette.text.secondary
    },
    avatar: {
      border: "2px solid ".concat(theme.palette.common.white),
      backgroundColor: theme.palette.common.gradient
    },
    image: {
      width: 32,
      height: 'auto'
    },
    listItem: {
      marginTop: theme.spacing(1),
      border: "1px solid ".concat(theme.palette.common.white),
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.common.white,
        boxShadow: "0px 0px 10px 0px ".concat(theme.palette.common.border)
      }
    }
  };
});