"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SwitchInput = function SwitchInput(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      placeholder = _ref.placeholder,
      handleChange = _ref.handleChange;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    color: "secondary"
  }, label)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.input
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react["default"].createElement(_material.Switch, {
      name: name,
      checked: value,
      onChange: handleChange,
      value: "true"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body1",
      color: "textSecondary"
    }, placeholder)
  })));
};

var _default = SwitchInput;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    input: {
      display: 'flex',
      direction: 'column',
      borderRadius: 4,
      padding: theme.spacing(0.5, 2, 0.5, 2),
      backgroundColor: theme.palette.common.white,
      border: "1px solid ".concat(theme.palette.common.inputBorder),
      boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
      fontSize: 15,
      '&:focus': {
        boxShadow: "".concat((0, _material.alpha)('#999999', 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.primary.light
      }
    }
  };
});