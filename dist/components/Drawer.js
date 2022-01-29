"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _reactFeather = require("react-feather");

var _excluded = ["open", "title", "anchor", "subtitle", "handleClose", "children", "width", "buttons"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Drawer = function Drawer(_ref) {
  var open = _ref.open,
      title = _ref.title,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? 'right' : _ref$anchor,
      subtitle = _ref.subtitle,
      handleClose = _ref.handleClose,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 520 : _ref$width,
      buttons = _ref.buttons,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    width: width
  });
  return /*#__PURE__*/_react["default"].createElement(_material.SwipeableDrawer, {
    open: open,
    variant: "temporary",
    anchor: anchor,
    onOpen: handleClose,
    onClose: handleClose,
    classes: {
      paper: classes.paper
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconBar
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.ChevronLeft, null))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "textSecondary",
    variant: "caption",
    className: classes.title
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconBar
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.buttons
  }, buttons))));
};

var _default = Drawer;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _container;

  return {
    icon: {
      color: theme.palette.secondary.light
    },
    header: {
      display: 'flex',
      flexDirecton: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor: theme.palette.background.main,
      borderBottom: "1px solid ".concat(theme.palette.common.inputBorder),
      background: "linear-gradient(#fff, ".concat(theme.palette.common.gradient, ")")
    },
    button: {
      border: "1px solid ".concat(theme.palette.common.inputBorder),
      boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important"
    },
    buttons: {
      margin: theme.spacing(2, 0)
    },
    paper: {
      zIndex: "90 !important",
      backgroundColor: theme.palette.background.main
    },
    title: {},
    iconBar: {
      width: 60
    },
    container: (_container = {
      zIndex: "90 !important",
      width: '100%'
    }, _defineProperty(_container, "width", 540), _defineProperty(_container, "maxWidth", function maxWidth(props) {
      return props.width;
    }), _defineProperty(_container, theme.breakpoints.down('sm'), {
      width: '100vw'
    }), _container),
    content: {
      padding: theme.spacing(2)
    }
  };
});