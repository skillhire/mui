"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomPopper = function CustomPopper(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.Popper, _extends({}, props, {
    className: classes.popper,
    placement: "bottom"
  }));
};

var ArrayInput = function ArrayInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      placeholder = _ref.placeholder,
      handleChange = _ref.handleChange;
  var classes = useStyles();

  var handleInputChange = function handleInputChange(ev, values) {
    var newValues = values.filter(function (value) {
      return value != null;
    });
    handleChange({
      target: {
        name: name,
        value: newValues
      }
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, label), /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    multiple: true,
    freeSolo: true,
    hasClearIcon: false,
    defaultValue: value,
    onChange: handleInputChange,
    options: ['Enter value'],
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    PopperComponent: CustomPopper,
    clearIcon: /*#__PURE__*/_react["default"].createElement(_reactFeather.X, {
      className: classes.icon
    }),
    renderTags: function renderTags(tagValue, getTagProps) {
      return tagValue.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_material.Chip, _extends({
          className: classes.chip,
          label: option,
          color: "secondary",
          variant: "outlined",
          deleteIcon: /*#__PURE__*/_react["default"].createElement(_reactFeather.X, {
            className: classes.icon
          })
        }, getTagProps({
          index: index
        })));
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({}, params, {
        color: "secondary",
        className: classes.textField,
        margin: "dense",
        variant: "outlined"
      }));
    }
  }));
};

var _default = ArrayInput;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _MuiOutlinedInput;

  return {
    root: {},
    textField: {
      '& .MuiOutlinedInput-root': (_MuiOutlinedInput = {
        padding: 4,
        fontSize: theme.typography.body3.fontSize,
        fontFamily: theme.typography.body3.fontFamily,
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: "1px solid ".concat(theme.palette.common.inputBorder)
      }, _defineProperty(_MuiOutlinedInput, "transition", theme.transitions.create(['border-color', 'box-shadow'])), _defineProperty(_MuiOutlinedInput, "boxShadow", "rgb(0 0 0 / 5%) 0px 2px 4px !important"), _defineProperty(_MuiOutlinedInput, "width", '100%'), _defineProperty(_MuiOutlinedInput, '& fieldset', {
        border: "1px solid transparent"
      }), _defineProperty(_MuiOutlinedInput, '&:hover fieldset', {
        border: "1px solid transparent"
      }), _defineProperty(_MuiOutlinedInput, '&.Mui-focused fieldset', {
        border: "0px solid ".concat(theme.palette.primary.light)
      }), _MuiOutlinedInput),
      root: {
        height: 26
      }
    },
    icon: {
      height: 20,
      width: 20,
      color: '#888'
    },
    popper: {
      fontWeight: theme.typography.body3.fontWeight,
      fontFamily: theme.typography.body3.fontFamily
    }
  };
});
exports.useStyles = useStyles;