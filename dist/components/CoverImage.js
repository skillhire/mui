"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

var _ResponsiveImage = _interopRequireDefault(require("./ResponsiveImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CoverImage = function CoverImage(_ref) {
  var _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? '100%' : _ref$maxHeight,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      src = _ref.src;
  var classes = useStyles({
    maxHeight: maxHeight,
    width: width,
    alignItems: alignItems
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_ResponsiveImage["default"], {
    src: src
  }));
};

var _default = CoverImage;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: function alignItems(props) {
        return props.alignItems;
      },
      overflow: 'hidden',
      width: '100%',
      height: 'auto',
      maxHeight: function maxHeight(props) {
        return props.maxHeight;
      }
    }
  };
});