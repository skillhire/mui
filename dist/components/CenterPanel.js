"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@mui/styles");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _excluded = ["children", "open"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CenterPanel = function CenterPanel(_ref) {
  var children = _ref.children,
      open = _ref.open,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx2["default"])(classes.root, _defineProperty({}, classes.open, open))
  }, children);
};

CenterPanel.propTypes = {
  children: _propTypes["default"].any
};
var _default = CenterPanel;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '100%',
      flexGrow: 1,
      overflowY: 'scroll'
    }, theme.breakpoints.down('sm'), {
      flexBasis: '100%',
      height: '100%',
      width: '100%',
      maxWidth: 'none',
      flexShrink: '0',
      transition: 'transform .5s ease',
      transform: 'translateX(0)'
    }),
    open: _defineProperty({}, theme.breakpoints.down('sm'), {
      transform: 'translateX(-100%)'
    })
  };
});