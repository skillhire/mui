"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _hooks = require("../hooks");

var _excluded = ["children", "desktopWidth"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$desktopWidth = _ref.desktopWidth,
      desktopWidth = _ref$desktopWidth === void 0 ? 60 : _ref$desktopWidth,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useResponsive = (0, _hooks.useResponsive)(),
      isMobile = _useResponsive.isMobile;

  var classes = useStyles({
    isMobile: isMobile,
    desktopWidth: desktopWidth
  });
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: (0, _clsx2["default"])(classes.content, _defineProperty({}, classes.contentShift, isMobile))
  }, children);
};

var _default = Layout;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    content: {
      transition: theme.transitions.create('padding', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: function marginLeft(props) {
        return !props.isMobile && props.desktopWidth;
      }
    },
    contentShift: {
      transition: theme.transitions.create('padding', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
});