"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _excluded = ["title", "open", "subtitle", "children", "actions"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LeftPanel = function LeftPanel(_ref) {
  var title = _ref.title,
      open = _ref.open,
      subtitle = _ref.subtitle,
      children = _ref.children,
      actions = _ref.actions,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx2["default"])(classes.root, _defineProperty({}, classes.open, open))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.container
  }, children));
};

LeftPanel.propTypes = {
  children: _propTypes["default"].any.isRequired
};
var _default = LeftPanel;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _defineProperty({
      height: '100%',
      backgroundColor: theme.palette.common.white,
      borderRight: "1px solid ".concat(theme.palette.common.border),
      minWidth: 240
    }, theme.breakpoints.down('sm'), _defineProperty({
      flexBasis: '100%',
      height: '100%',
      width: '100%',
      maxWidth: 'none',
      flexShrink: '0',
      transition: 'transform .5s ease',
      transform: 'translateX(0)'
    }, "width", '100%')),
    open: _defineProperty({}, theme.breakpoints.down('sm'), {
      transform: 'translateX(-100%)'
    }),
    headerContainer: {
      display: 'flex',
      flexScale: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: "1px solid ".concat(theme.palette.common.border),
      padding: theme.spacing(2),
      height: 74,
      background: "linear-gradient(#fff, ".concat(theme.palette.common.gradient, ")")
    },
    header: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }, theme.breakpoints.down('sm'), {
      paddingLeft: 50
    }),
    title: {
      lineHeight: 1.0
    },
    container: {
      width: '100%',
      overflowY: 'scroll',
      overflowX: 'none'
    }
  };
});