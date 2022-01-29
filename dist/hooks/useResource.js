"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = _interopRequireDefault(require("../context/ApiContext"));

var _hooks = require("hooks");

var _reactRouter = require("react-router");

var _excluded = ["url", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

/* useResource
  A base hook that allows for CRUD operations of a REST API that follows
  standard REST patterns of GET POST PUT and DELETE to create, update, create and
  destroy objects.

  @param id - The resource ID to auto fetch
  @param url - The API endpoint. The is set dynamically using setEndpoint
  @param name - The name of the resource needed when using POST and PUT
*/
var useResource = function useResource(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '/' : _ref$url,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_ApiContext["default"]),
      api = _useContext.api;

  var history = (0, _reactRouter.useHistory)();

  var _useLoaders = (0, _hooks.useLoaders)(),
      isLoading = _useLoaders.isLoading,
      showLoading = _useLoaders.showLoading,
      hideLoading = _useLoaders.hideLoading;

  var _useAlerts = (0, _hooks.useAlerts)(),
      showAlertError = _useAlerts.showAlertError;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEmpty = _useState4[0],
      setIsEmpty = _useState4[1];

  var _useState5 = (0, _react.useState)(props.id),
      _useState6 = _slicedToArray(_useState5, 2),
      id = _useState6[0],
      setId = _useState6[1];

  var _useState7 = (0, _react.useState)({
    id: props.id
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      resource = _useState8[0],
      setResource = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      resources = _useState10[0],
      setResources = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      meta = _useState12[0],
      setMeta = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      params = _useState14[0],
      setParams = _useState14[1];

  var _useState15 = (0, _react.useState)(1),
      _useState16 = _slicedToArray(_useState15, 2),
      page = _useState16[0],
      setPage = _useState16[1];

  var _useState17 = (0, _react.useState)(20),
      _useState18 = _slicedToArray(_useState17, 2),
      perPage = _useState18[0],
      setPerPage = _useState18[1];

  var _useState19 = (0, _react.useState)(1),
      _useState20 = _slicedToArray(_useState19, 2),
      numPages = _useState20[0],
      setNumPages = _useState20[1];

  var _useState21 = (0, _react.useState)("".concat(name, "s.id")),
      _useState22 = _slicedToArray(_useState21, 2),
      sortKey = _useState22[0],
      setSortKey = _useState22[1];

  var _useState23 = (0, _react.useState)('desc'),
      _useState24 = _slicedToArray(_useState23, 2),
      sortDirection = _useState24[0],
      setSortDirection = _useState24[1];

  var _useState25 = (0, _react.useState)(0),
      _useState26 = _slicedToArray(_useState25, 2),
      totalCount = _useState26[0],
      setTotalCount = _useState26[1];

  var _useState27 = (0, _react.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      errors = _useState28[0],
      setErrors = _useState28[1];

  var findOne = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!id) showAlertError('No ID was provided');
              _context.prev = 1;
              showLoading();
              setIsLoaded(false);
              setId(id);
              _context.next = 7;
              return api.get("".concat(url, "/").concat(id));

            case 7:
              res = _context.sent;
              setResource(res.data);
              setMeta(res.meta);
              setIsLoaded(true);
              hideLoading();
              return _context.abrupt("return", res.data);

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              handleErrors(_context.t0);

            case 18:
              hideLoading();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }));

    return function findOne(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var findMany = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
      var page,
          loadMore,
          res,
          _res$data,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
              loadMore = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
              _context2.prev = 2;
              showLoading();
              setParams(params);
              setPage(page);

              if (!loadMore) {
                setIsLoaded(false);
              }

              _context2.next = 9;
              return api.get(url, {
                params: _objectSpread(_objectSpread({}, params), {}, {
                  page: page
                })
              });

            case 9:
              res = _context2.sent;
              hideLoading();

              if (!res.data) {
                _context2.next = 17;
                break;
              }

              if (!loadMore) {
                setResources(res.data);
              } else {
                setResources([].concat(_toConsumableArray(resources), _toConsumableArray(res.data)));
              }

              if (res.meta) {
                setMeta(res.meta);
                setPage(res.meta.page);
                setPerPage(res.meta.per_page);
                setNumPages(res.meta.num_pages);
                setTotalCount(res.meta.total_count);
              }

              setIsEmpty((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.length) > 0 ? false : true);
              setIsLoaded(true);
              return _context2.abrupt("return", res.data);

            case 17:
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](2);
              hideLoading();
              handleErrors(_context2.t0);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 19]]);
    }));

    return function findMany(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadMore = function loadMore() {
    var nextPage = page + 1;
    var appendResults = true;
    findMany(params, nextPage, appendResults);
  };

  var save = function save(resource) {
    var showLoaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (resource !== null && resource !== void 0 && resource.id) {
      return update(resource, showLoaders);
    } else {
      return create(resource, showLoaders);
    }
  };

  var create = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resource) {
      var showLoaders,
          res,
          _args3 = arguments;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              showLoaders = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;
              _context3.prev = 1;
              if (showLoaders) showLoading();
              _context3.next = 5;
              return api.post("".concat(url), _defineProperty({}, name, resource));

            case 5:
              res = _context3.sent;

              if (res.data && res.data.id) {
                setResource(res.data);
                setIsLoaded(true);
                setId(res.data.id);
              }

              hideLoading();
              return _context3.abrupt("return", res.data);

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              showAlertError('There was an issue saving');
              handleErrors(_context3.t0);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 11]]);
    }));

    return function create(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var update = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resource) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setId(resource.id);
              _context4.prev = 1;
              showLoading();
              _context4.next = 5;
              return api.put("".concat(url, "/").concat(resource.id), _defineProperty({}, name, resource));

            case 5:
              res = _context4.sent;
              hideLoading();
              return _context4.abrupt("return", res.data);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              showAlertError('There was an issue updating');
              handleErrors(_context4.t0);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 10]]);
    }));

    return function update(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var destroy = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resourceId) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              showLoading();
              _context5.next = 4;
              return api["delete"]("".concat(url, "/").concat(resourceId));

            case 4:
              res = _context5.sent;
              setResource({
                data: {}
              });
              hideLoading();
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              handleErrors(_context5.t0);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function destroy(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var paginate = function paginate(page) {
    return findMany(params, page);
  };

  var handleChange = function handleChange(ev) {
    var name = ev.target.name;
    var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setResource(_objectSpread(_objectSpread({}, resource), {}, _defineProperty({}, name, value)));
  };

  var handleErrors = function handleErrors(e) {
    hideLoading();
    setIsLoaded(false);
    setErrors(e);
    console.error('useResource Error:', e);

    if ((e === null || e === void 0 ? void 0 : e.status) == 401) {
      showAlertError('Please Sign In to continue');
      localStorage.removeItem('token');
      setTimeout(function () {
        return window.location.href = '/login';
      }, 1000);
    }

    return false;
  };

  var reloadOne = function reloadOne() {
    return findOne(id);
  };

  var reloadMany = function reloadMany() {
    return findMany(params);
  };

  var handleSort = function handleSort(sortBy) {
    sortDirection == 'asc' ? setSortDirection('desc') : setSortDirection('asc');
    setSortKey(sortBy);
    history.push("?sort_key=".concat(sortKey, "&sort_direction=").concat(sortDirection));
  };

  (0, _react.useEffect)(function () {
    if (props.id) setId(props.id);
  }, [props.id]);
  return {
    id: id,
    isLoading: isLoading,
    isLoaded: isLoaded,
    isEmpty: isEmpty,
    resource: resource,
    resources: resources,
    setResource: setResource,
    setResources: setResources,
    errors: errors,
    meta: meta,
    findOne: findOne,
    findMany: findMany,
    save: save,
    update: update,
    create: create,
    destroy: destroy,
    paginate: paginate,
    loadMore: loadMore,
    handleChange: handleChange,
    params: params,
    page: page,
    perPage: perPage,
    numPages: numPages,
    totalCount: totalCount,
    reloadOne: reloadOne,
    reloadMany: reloadMany,
    sortKey: sortKey,
    sortDirection: sortDirection,
    handleSort: handleSort
  };
};

var _default = useResource;
exports["default"] = _default;