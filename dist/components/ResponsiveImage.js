"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ResponsiveImage = function ResponsiveImage(_ref) {
  var src = _ref.src,
      className = _ref.className;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    className: (0, _clsx["default"])(className, classes.responsive)
  });
};

var _default = ResponsiveImage;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    responsive: {
      width: '100%',
      height: 'auto'
    }
  };
});