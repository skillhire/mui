"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _iconsMaterial = require("@mui/icons-material");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MenuItem = function MenuItem(_ref) {
  var handleClick = _ref.handleClick,
      indent = _ref.indent,
      active = _ref.active,
      value = _ref.value,
      _ref$depth = _ref.depth,
      depth = _ref$depth === void 0 ? 0 : _ref$depth,
      open = _ref.open,
      _ref$expandable = _ref.expandable,
      expandable = _ref$expandable === void 0 ? false : _ref$expandable,
      text = _ref.text,
      image = _ref.image,
      Icon = _ref.icon,
      Image = _ref.image;
  var classes = useStyles();
  var paddingLeft = 18;

  if (depth > 0) {
    paddingLeft = 42 + 8 * depth;
  }

  var style = {
    paddingLeft: paddingLeft
  };
  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    className: classes.itemLeaf,
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleClick,
    className: (0, _clsx["default"])(classes.button, "depth-".concat(depth), active ? classes.active : null),
    style: style,
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
      className: classes.icon
    }), image && /*#__PURE__*/_react["default"].createElement("img", {
      src: Image,
      className: classes.icon
    }))
  }, /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    smUp: true
  }, text), expandable && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, open ? /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ExpandLess, {
    className: classes.expandIcon,
    color: "inherit"
  }) : /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ExpandMore, {
    className: classes.expandIcon,
    color: "inherit"
  }))));
};

var _default = MenuItem;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    item: {
      display: 'block'
    },
    itemLeaf: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      borderRadius: '0',
      color: theme.palette.common.white,
      padding: '12px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    icon: {
      height: 20,
      width: 20,
      color: theme.palette.common.white,
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(0, 1, 0, 1)
    },
    expandIcon: {
      marginLeft: 'auto',
      height: 20,
      width: 20
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto'
    },
    active: {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      '& $icon': {
        color: 'white'
      }
    }
  };
});