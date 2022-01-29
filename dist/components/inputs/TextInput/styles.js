"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {},
    inputBase: {
      width: '100%',
      '& input, & textarea': {
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        height: 26,
        padding: theme.spacing(1),
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: "1px solid ".concat(theme.palette.common.inputBorder),
        boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
        fontSize: theme.typography.body3.fontSize,
        fontFamily: theme.typography.body3.fontFamily,
        '&:focus': {
          border: function border(props) {
            return props.error == true ? "2px solid ".concat(theme.palette.common.errorBorder) : "1px solid ".concat(theme.palette.primary.light);
          }
        }
      }
    },
    IconButton: {
      padding: '5px'
    },
    icon: {
      fontSize: '20px',
      color: '#888'
    }
  };
});
exports.useStyles = useStyles;