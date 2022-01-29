"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _useResponsive2 = _interopRequireDefault(require("../hooks/useResponsive"));

var _styles = require("@mui/styles");

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      icon = _ref.icon,
      title = _ref.title,
      subtitle = _ref.subtitle,
      actions = _ref.actions,
      children = _ref.children,
      maxWidth = _ref.maxWidth,
      secondaryActions = _ref.secondaryActions,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? 2 : _ref$p,
      fullScreen = _ref.fullScreen;
  var classes = useStyles({
    p: p
  });

  var _useResponsive = (0, _useResponsive2["default"])(),
      isMobile = _useResponsive.isMobile;

  return /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    className: classes.root,
    fullWidth: true,
    maxWidth: maxWidth || 'sm',
    fullScreen: isMobile || fullScreen === true ? true : false,
    open: open,
    onClose: handleClose,
    transition: _material.Slide
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    className: classes.dialogTitle,
    onClose: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    color: "secondary",
    className: classes.title
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.secondaryActions
  }, secondaryActions && secondaryActions, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    className: classes.closeButton,
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, null))))), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, {
    className: classes.dialogContent
  }, subtitle && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1"
  }, subtitle), /*#__PURE__*/_react["default"].createElement("div", null, children)), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, {
    className: classes.dialogActions
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleClose,
    color: "secondary",
    className: classes.button
  }, "Cancel"), actions));
};

var _default = Modal;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    title: {
      marginTop: theme.spacing(1)
    },
    dialogTitle: {
      color: theme.palette.text.primary,
      padding: theme.spacing(1, 1.5, 1, 2),
      width: '100%',
      backgroundColor: theme.palette.common.white,
      borderBottom: "1px solid ".concat(theme.palette.common.border),
      background: "linear-gradient(#fff, ".concat(theme.palette.common.gradient, ")")
    },
    dialogContent: {
      backgroundColor: theme.palette.background.main,
      padding: function padding(props) {
        return theme.spacing(props.p);
      }
    },
    dialogActions: {
      backgroundColor: theme.palette.background.main
    },
    secondaryActions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    closeButton: {
      color: theme.palette.secondary.main
    }
  };
});