"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Panel = _interopRequireDefault(require("./Panel"));

var _excluded = ["title", "subtitle", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AuthScreen = function AuthScreen(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Container, {
    maxWidth: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 10
  }, /*#__PURE__*/_react["default"].createElement(_Panel["default"], {
    p: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mt: 2,
    mb: 3
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4"
  }, title), subtitle && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    color: "textSecondary"
  }, subtitle)), children)));
};

var _default = AuthScreen;
exports["default"] = _default;