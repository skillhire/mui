"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _ButtonLoader = _interopRequireDefault(require("./ButtonLoader"));

var _ProgressLoader = _interopRequireDefault(require("./ProgressLoader"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DeleteWarningModal = function DeleteWarningModal(_ref) {
  var isLoading = _ref.isLoading,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Are you sure?' : _ref$title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? 'Please confirm or cancel this action.' : _ref$subtitle,
      open = _ref.open,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    title: "Are you sure?",
    actions: /*#__PURE__*/_react["default"].createElement(_material.Button, {
      color: "secondary",
      onClick: onConfirm,
      startIcon: isLoading && /*#__PURE__*/_react["default"].createElement(_ButtonLoader["default"], null)
    }, "Confirm"),
    handleClose: onClose
  }, !isLoading ? /*#__PURE__*/_react["default"].createElement(_Placeholder["default"], {
    icon: /*#__PURE__*/_react["default"].createElement(_reactFeather.AlertCircle, {
      className: classes.icon
    }),
    title: title,
    subtitle: subtitle
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content
  }, /*#__PURE__*/_react["default"].createElement(_ProgressLoader["default"], null)));
};

DeleteWarningModal.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onConfirm: _propTypes["default"].func.isRequired
};
var _default = DeleteWarningModal;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      color: theme.palette.secondary.main,
      height: 32,
      width: 32
    }
  };
});