"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["className", "required", "label", "type", "name", "margin", "value", "multiline", "handleChange", "rows", "placeholder", "disabled", "onKeyPress", "autoComplete", "startIcon", "endIcon", "isClearable", "isLoading", "error"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//import { useStyles } from './styles'
var TextInput = function TextInput(_ref) {
  var className = _ref.className,
      required = _ref.required,
      label = _ref.label,
      type = _ref.type,
      name = _ref.name,
      margin = _ref.margin,
      value = _ref.value,
      multiline = _ref.multiline,
      handleChange = _ref.handleChange,
      rows = _ref.rows,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onKeyPress = _ref.onKeyPress,
      _ref$autoComplete = _ref.autoComplete,
      autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      isClearable = _ref.isClearable,
      isLoading = _ref.isLoading,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    error: error
  });
  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true,
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, label), /*#__PURE__*/_react["default"].createElement(_material.InputBase, {
    rows: rows,
    multiline: multiline,
    autoComplete: "off",
    fullWidth: true,
    type: type,
    name: name,
    margin: margin,
    disabled: disabled,
    placeholder: placeholder,
    onKeyPress: onKeyPress,
    variant: "outlined",
    onChange: handleChange,
    value: value || ''
  }));
};

var _default = TextInput;
exports["default"] = _default;