"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["value", "options", "label", "name", "placeholder", "multiselect", "handleChange", "handleInputChange", "freeSolo", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Autosuggest = function Autosuggest(_ref) {
  var value = _ref.value,
      options = _ref.options,
      label = _ref.label,
      name = _ref.name,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder,
      _ref$multiselect = _ref.multiselect,
      multiselect = _ref$multiselect === void 0 ? false : _ref$multiselect,
      handleChange = _ref.handleChange,
      handleInputChange = _ref.handleInputChange,
      _ref$freeSolo = _ref.freeSolo,
      freeSolo = _ref$freeSolo === void 0 ? false : _ref$freeSolo,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  var _useState = (0, _react.useState)({
    label: '',
    value: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleOnChange = function handleOnChange(event, newValue) {
    setSelected(newValue);
    handleChange({
      target: {
        name: name,
        value: newValue === null || newValue === void 0 ? void 0 : newValue.value
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (_typeof(value) != 'object') {
      setSelected(options.find(function (o) {
        return o.value == value;
      }));
    } else {
      setSelected(value);
    }
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.container, className)
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "caption",
    color: "textSecondary",
    className: classes.label
  }, label), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    freeSolo: freeSolo,
    multiple: multiselect,
    disableCloseOnSelect: multiselect,
    classes: {
      paper: classes.paper,
      option: classes.option,
      popperDisablePortal: classes.popperDisablePortal
    },
    value: selected,
    onChange: function onChange(event, newValue) {
      handleOnChange(event, newValue);
    },
    onInputChange: function onInputChange(event, newInputValue) {
      handleInputChange && handleInputChange(newInputValue);
    },
    noOptionsText: "No options",
    clearOnBlur: true,
    handleHomeEndKeys: true,
    options: options,
    getOptionLabel: function getOptionLabel(option) {
      return option === null || option === void 0 ? void 0 : option.label;
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return (option === null || option === void 0 ? void 0 : option.label) == (value === null || value === void 0 ? void 0 : value.label);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.InputBase, {
        placeholder: placeholder,
        ref: params.InputProps.ref,
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          autoComplete: 'none'
        }),
        className: classes.inputBase
      });
    }
  }));
};

var _default = Autosuggest;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    inputBase: {
      zIndex: theme.zIndex.modal + 2,
      padding: 0,
      width: '100%',
      '& input': {
        zIndex: theme.zIndex.modal + 2,
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        padding: theme.spacing(1),
        height: 26,
        borderRadius: 4,
        fontSize: theme.typography.body3.fontSize,
        fontFamily: theme.typography.body3.fontFamily,
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: '1px solid #ced4da',
        '&:focus': {
          boxShadow: "".concat((0, _material.alpha)('#999999', 0.25), " 0 0 0 0.2rem"),
          borderColor: theme.palette.primary.light
        }
      }
    },
    paper: {
      backgroundColor: theme.palette.common.white,
      marginTop: theme.spacing(1),
      color: '#586069',
      fontSize: 15
    },
    option: {
      zIndex: '999 !important',
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent'
      },
      '&[data-focus="true"]': {
        backgroundColor: theme.palette.action.hover
      }
    },
    popperDisablePortal: {
      zIndex: theme.zIndex.modal + 2,
      position: 'relative'
    },
    label: {
      marginBottom: 0
    }
  };
});