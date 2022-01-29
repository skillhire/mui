"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _excluded = ["label", "name", "value", "options", "handleChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SelectInput = function SelectInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      handleChange = _ref.handleChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline",
    gutterBottom: true
  }, label), /*#__PURE__*/_react["default"].createElement(_Select["default"], _extends({
    "native": true
  }, props, {
    margin: "dense",
    value: value,
    name: name,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    input: /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
      name: name
    })
  }), /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }), options && options.map(function (option, idx) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: option.value,
      key: idx
    }, option.text);
  })));
};

var _default = SelectInput;
exports["default"] = _default;