"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["title", "subtitle", "disableBorder"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuHeader = function MenuHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$disableBorder = _ref.disableBorder,
      disableBorder = _ref$disableBorder === void 0 ? false : _ref$disableBorder,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    disableBorder: disableBorder
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.title
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1"
  }, title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, subtitle)));
};

MenuHeader.propTypes = {
  title: _propTypes["default"].string.isRequired,
  subtitle: _propTypes["default"].string
};
var _default = MenuHeader;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTop: function borderTop(props) {
        return !props.disableBorder && "1px solid ".concat(theme.palette.common.border);
      }
    },
    title: {
      padding: theme.spacing(2, 2, 1, 2)
    }
  };
});