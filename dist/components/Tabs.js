"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["children", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReactTabs = function ReactTabs(_ref) {
  var children = _ref.children,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(StyledTabs, {
    value: value,
    onChange: onChange,
    color: "primary"
  }, children);
};

ReactTabs.propTypes = {
  children: _propTypes["default"].any,
  value: _propTypes["default"].any,
  onChange: _propTypes["default"].func.isRequired
};
var _default = ReactTabs;
exports["default"] = _default;
var StyledTabs = (0, _styles.withStyles)(function (theme) {
  return {
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: theme.palette.text.secondary
      }
    }
  };
})(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_material.Tabs, _extends({}, props, {
    TabIndicatorProps: {
      children: /*#__PURE__*/_react["default"].createElement("span", null)
    }
  }));
});