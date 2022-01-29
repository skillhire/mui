"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactDivider = function ReactDivider(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  });
};

var _default = ReactDivider;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      borderBottom: "1px solid ".concat(theme.palette.common.border)
    }
  };
});