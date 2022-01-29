"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useResponsive2 = _interopRequireDefault(require("../hooks/useResponsive"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["title", "buttons", "width", "mb"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Subheader = function Subheader(_ref) {
  var title = _ref.title,
      buttons = _ref.buttons,
      width = _ref.width,
      _ref$mb = _ref.mb,
      mb = _ref$mb === void 0 ? 2 : _ref$mb,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  var _useResponsive = (0, _useResponsive2["default"])(),
      isMobile = _useResponsive.isMobile;

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.box,
    mb: mb
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    ml: isMobile ? 6 : 3,
    mt: 1.5
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "textPrimary",
    variant: "h4"
  }, title))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.buttons
  }, buttons && buttons));
};

var _default = Subheader;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    box: {
      position: 'relative',
      height: 52,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.common.white,
      borderBottom: "1px solid ".concat(theme.palette.common.border),
      boxShadow: "0px 0px 4px 0px ".concat(theme.palette.common.border),
      background: "linear-gradient(#fff, ".concat(theme.palette.common.gradient, ")")
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      gap: '5px',
      justifyContent: 'flex-end'
    }
  };
});