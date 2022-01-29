"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["style", "label", "options", "handleChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CheckboxGroupInput = function CheckboxGroupInput(_ref) {
  var style = _ref.style,
      label = _ref.label,
      options = _ref.options,
      handleChange = _ref.handleChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_material.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, label), options && options.map(function (option, idx) {
    return /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
      key: idx,
      control: /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
        name: option.name,
        checked: option.value ? true : false,
        onChange: handleChange,
        value: true
      }),
      label: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "body2"
      }, option.label)
    });
  })));
};

var _default = CheckboxGroupInput;
exports["default"] = _default;