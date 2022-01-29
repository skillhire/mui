"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ApiContext = _interopRequireDefault(require("context/ApiContext"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiProvider = function ApiProvider(_ref) {
  var url = _ref.url,
      children = _ref.children;

  var configApi = function configApi(baseURL) {
    var headers = {
      'Content-Type': 'application/json'
    }; // on page reload, get the token from localStorage

    var token = localStorage.getItem('authToken');

    if (token) {
      headers = _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: "".concat(token)
      });
    }

    var api = _axios["default"].create({
      baseURL: baseURL,
      headers: headers,
      timeout: 60000
    });

    api.interceptors.response.use(function (resp) {
      return Promise.resolve(resp.data);
    }, function (error) {
      return Promise.reject(error.response);
    });
    return api;
  };

  var api = configApi(url);
  var value = {
    api: api
  };
  return /*#__PURE__*/_react["default"].createElement(_ApiContext["default"].Provider, {
    value: value
  }, children);
};

var _default = ApiProvider;
exports["default"] = _default;