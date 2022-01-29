"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["open", "handleClose", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Toolbar = function Toolbar(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.Slide, {
    "in": open,
    direction: "down"
  }, /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    className: classes.paper,
    square: true,
    elevation: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Container, {
    className: classes.paper,
    maxWidth: "xl"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 1
  }), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    mt: 1,
    justifyContent: "center"
  }, children)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    className: classes.button,
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Close, null))))))));
};

var _default = Toolbar;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      zIndex: 2000,
      backgroundColor: theme.palette.common.white,
      top: 0,
      left: 0,
      position: 'fixed',
      height: 64,
      width: '100%'
    },
    container: {
      paddingTop: 10
    },
    button: {
      marginTop: 4
    }
  };
});