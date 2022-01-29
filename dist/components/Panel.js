"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["children", "maxWidth", "p"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Panel = function Panel(_ref) {
  var children = _ref.children,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? 'xl' : _ref$maxWidth,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? 3 : _ref$p,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    p: p,
    className: classes.root
  }, children);
};

Panel.propTypes = {
  children: _propTypes["default"].any,
  maxWidth: _propTypes["default"].string,
  p: _propTypes["default"].number
};
var _default = Panel;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%',
      backgroundColor: theme.palette.common.white,
      borderBottom: "1px solid ".concat(theme.palette.common.border)
    }
  };
});