"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _iconsMaterial = require("@mui/icons-material");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _ProgressLoader = _interopRequireDefault(require("./ProgressLoader"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _reactFeather = require("react-feather");

var _excluded = ["circle", "handleUpload", "label", "size", "imageUrl", "handleDelete"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IMAGE_WIDTH = 140;

var ImageUploader = function ImageUploader(_ref) {
  var _ref$circle = _ref.circle,
      circle = _ref$circle === void 0 ? true : _ref$circle,
      handleUpload = _ref.handleUpload,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Upload media' : _ref$label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? IMAGE_WIDTH : _ref$size,
      imageUrl = _ref.imageUrl,
      handleDelete = _ref.handleDelete,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    size: size
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      files = _useState6[0],
      setFiles = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isUploading = _useState8[0],
      setIsUploading = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isUploaded = _useState10[0],
      setIsUploaded = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      dropzoneActive = _useState12[0],
      setDropzoneActive = _useState12[1];

  var handleEditClick = function handleEditClick() {
    return setIsEditing(!isEditing);
  };

  var onDrop = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsUploading(true);
              setIsUploaded(false);
              _context.next = 4;
              return handleUpload(files[0]);

            case 4:
              setIsEditing(false);
              setIsUploading(false);
              setIsUploaded(true);
              setFiles([]);
              setFile(null);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDrop(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDragEnter = function onDragEnter(files) {
    setFiles(files);
    setDropzoneActive(true);
  };

  var onDragLeave = function onDragLeave(files) {
    setFiles(files);
    setDropzoneActive(false);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, imageUrl && !isEditing && /*#__PURE__*/_react["default"].createElement("img", {
    className: (0, _clsx2["default"])(classes.image, _defineProperty({}, classes.circle, circle)),
    size: size,
    src: imageUrl
  }), (isEditing || !imageUrl) && /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], {
    className: classes.dropZone,
    disableClick: false,
    onDrop: onDrop,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    multiple: true
  }, !isUploaded && !isUploading && !dropzoneActive && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFeather.UploadCloud, {
    className: classes.icon
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "secondary"
  }, label)), isUploaded && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFeather.CheckCircle, {
    className: classes.icon
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "secondary"
  }, "Upload completed."), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "secondary"
  }, "Drag and drop more files to upload.")), !isUploaded && !isUploading && dropzoneActive && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactFeather.DownloadCloud, {
    className: classes.icon
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "secondary"
  }, "Drop file to upload.")), !isUploaded && isUploading && /*#__PURE__*/_react["default"].createElement(_ProgressLoader["default"], {
    size: 300
  })), imageUrl && handleDelete && /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    className: classes.iconButton,
    size: "small",
    onClick: handleDelete
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.DeleteOutlined, null)));
};

var _default = ImageUploader;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    image: {
      padding: 2,
      marginRight: theme.spacing(1),
      height: function height(props) {
        return props.size;
      },
      width: function width(props) {
        return props.size;
      }
    },
    circle: {
      borderRadius: 100
    },
    dropZone: {
      margin: 0,
      height: 140,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      border: "1px solid ".concat(theme.palette.common.inputBorder),
      boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
      backgroundColor: theme.palette.common.white,
      textAlign: 'center',
      marginBottom: theme.spacing(2)
    },
    icon: {
      height: 44,
      width: 44,
      color: theme.palette.secondary.light
    },
    iconButton: {
      fontSize: 11,
      top: 0,
      left: -48,
      color: theme.palette.text.secondary,
      '&& ': {
        backgroundColor: theme.palette.common.white
      }
    }
  };
});