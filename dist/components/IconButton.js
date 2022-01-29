"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["onClick", "icon", "className", "size", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonIcon = function ButtonIcon(_ref) {
  var onClick = _ref.onClick,
      Icon = _ref.icon,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    size: size,
    disabled: disabled
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    className: (0, _clsx["default"])(classes.button, className),
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: classes.icon
  })));
};

ButtonIcon.propTypes = {
  icon: _propTypes["default"].object.isRequired,
  handleClick: _propTypes["default"].func
};
var _default = ButtonIcon;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      color: function color(props) {
        return props.disabled ? theme.palette.common.grey : theme.palette.text.secondary;
      },
      height: function height(props) {
        return props.size;
      },
      width: function width(props) {
        return props.size;
      }
    },
    button: {
      padding: 12,
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: theme.palette.common.white
      }
    }
  };
});