"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BackButton = _interopRequireDefault(require("./BackButton"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PanelHeader = function PanelHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image = _ref.image,
      handleBackClick = _ref.handleBackClick,
      actions = _ref.actions;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/_react["default"].createElement(_BackButton["default"], {
    onClick: handleBackClick
  }), /*#__PURE__*/_react["default"].createElement("div", null, image && /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    variant: "rounded",
    className: classes.avatar
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: title,
    className: classes.image
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.titleBar
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    className: classes.title
  }, title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, subtitle))), actions && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.actions
  }, actions));
};

PanelHeader.propTypes = {
  title: _propTypes["default"].string,
  subtitle: _propTypes["default"].string,
  actions: _propTypes["default"].any
};
var _default = PanelHeader;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 74,
      width: '100%',
      borderBottom: "1px solid ".concat(theme.palette.common.border),
      background: theme.palette.common.white
    },
    avatar: {
      margin: theme.spacing(2, 0, 2, 2),
      backgroundColor: theme.palette.common.white,
      boxShadow: "rgb(0 0 0 / 10%) 0px 2px 4px !important"
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    titleBar: {
      padding: theme.spacing(2)
    },
    title: {
      lineHeight: 1.0
    },
    actions: {
      padding: theme.spacing(2)
    },
    image: {
      height: 32,
      width: 32
    }
  };
});