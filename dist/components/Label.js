"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["label", "color", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var label = _ref.label,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(classes.label, className),
    size: "small",
    color: color
  }, label);
};

Label.propTypes = {
  label: _propTypes["default"].string,
  color: _propTypes["default"].string,
  className: _propTypes["default"].string
};
var _default = Label;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    label: {
      height: 20,
      fontSize: 11,
      borderRadius: 4,
      fontWeight: theme.typography.body3.fontWeight,
      fontFamily: theme.typography.body3.fontFamily,
      padding: theme.spacing(0.5, 1),
      marginRight: theme.spacing(0.5),
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      backgroundColor: theme.palette.common.gradient
    }
  };
});