"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _reactFeather = require("react-feather");

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["value", "name", "label", "handleChange", "handleSubmit", "isLoading", "placeholder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableTextInput = function EditableTextInput(_ref) {
  var value = _ref.value,
      name = _ref.name,
      label = _ref.label,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isLoading = _ref.isLoading,
      placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var handleSubmitInput = function handleSubmitInput(name, value) {
    setEditing(false);
    handleSubmit(name, value);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    disabled: !editing,
    value: value,
    label: label,
    name: name,
    handleChange: handleChange,
    placeholder: placeholder
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.icons
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 24,
    className: classes.icon
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, editing ? /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      return setEditing(false);
    },
    className: classes.iconButton
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.XCircle, {
    className: classes.icon
  })) : /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      return setEditing(true);
    },
    className: classes.iconButton
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.Edit, {
    className: classes.icon
  })), editing && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      return handleSubmitInput(name, value);
    },
    className: classes.iconButton
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.CheckCircle, {
    className: classes.icon
  })))));
};

var _default = EditableTextInput;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center'
    },
    icons: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center'
    },
    icon: {
      height: 20,
      width: 20,
      color: theme.palette.secondary.main
    },
    iconButton: {}
  };
});