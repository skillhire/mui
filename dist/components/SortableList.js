"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _clsx2 = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SortableList = function SortableList(_ref) {
  var items = _ref.items,
      droppableId = _ref.droppableId,
      renderItem = _ref.renderItem,
      handleDrop = _ref.handleDrop,
      onDelete = _ref.onDelete;
  var classes = useStyles();

  var reorder = function reorder(items, startIndex, endIndex) {
    var result = Array.from(items);

    var _result$splice = result.splice(startIndex, 1),
        _result$splice2 = _slicedToArray(_result$splice, 1),
        removed = _result$splice2[0];

    result.splice(endIndex, 0, removed);
    return result.map(function (item, index) {
      return _objectSpread(_objectSpread({}, item), {}, {
        position: index + 1
      });
    });
  };

  var onDragEnd = function onDragEnd(result) {
    if (!result.destination) {
      return items;
    }

    var sorted = reorder(items, result.source.index, result.destination.index);
    handleDrop(sorted);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: droppableId
  }, function (provided) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.root
    }, /*#__PURE__*/_react["default"].createElement(_material.List, _extends({
      className: classes.list,
      disablePadding: true
    }, provided.droppableProps, {
      ref: provided.innerRef
    }), items.map(function (item, i) {
      return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
        key: item.id,
        draggableId: String(item.id),
        index: i
      }, function (provided, snapshot) {
        return /*#__PURE__*/_react["default"].createElement("div", _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          className: (0, _clsx2["default"])(classes.draggableItem, _defineProperty({}, classes.isDragging, snapshot.isDragging))
        }), renderItem(_objectSpread(_objectSpread({}, item), {}, {
          isDragging: snapshot.isDragging
        })));
      });
    })), provided.placeholder);
  }));
};

SortableList.propTypes = {
  droppableId: _propTypes["default"].string.isRequired,
  items: _propTypes["default"].array,
  handleDrop: _propTypes["default"].func
};
var _default = SortableList;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '100%'
    },
    list: {
      overflowY: 'scroll'
    },
    draggableItem: {},
    isDragging: {}
  };
});