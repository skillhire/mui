"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _iconsMaterial = require("@mui/icons-material");

var _clsx2 = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SortableListItem = function SortableListItem(_ref) {
  var item = _ref.item,
      isDragging = _ref.isDragging,
      className = _ref.className,
      dragIconClassName = _ref.dragIconClassName;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    disableGutters: true,
    className: (0, _clsx2["default"])(classes.item, className, _defineProperty({}, classes.isDragging, isDragging))
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.DragIndicator, {
    className: (0, _clsx2["default"])(classes.icon, dragIconClassName)
  })), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: item === null || item === void 0 ? void 0 : item.primary,
    seconeary: item === null || item === void 0 ? void 0 : item.secondary
  }));
};

SortableListItem.propTypes = {
  item: _propTypes["default"].object.isRequired,
  isDragging: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  dragIconClassName: _propTypes["default"].string
};
var _default = SortableListItem;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    item: {},
    icon: {
      color: theme.palette.text.secondary
    },
    isDragging: {}
  };
});