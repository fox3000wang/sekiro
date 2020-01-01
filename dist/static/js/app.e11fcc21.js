(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app"],{

/***/ "/7QA":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./typings/index.d.ts" />
var reducePromise_1 = __webpack_require__(/*! ./utils/reducePromise */ "DIv3");
var tasks_1 = __webpack_require__(/*! ./tasks */ "e5Za");
__webpack_require__(/*! ./index.css */ "p2bk");
reducePromise_1.default(tasks_1.default, {}).then(function (context) {
    var setIsReady = context.actions.common.setIsReady;

    setIsReady(true);
});
["drop", "dragover", "drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave"].forEach(function (item) {
    document.addEventListener(item, function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
});

/***/ }),

/***/ "8EKs":
/*!************************************!*\
  !*** ./src/utils/reducerHelper.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "YEIV");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "P2sY");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
/**
 * reducer utils
 * @param {*} state
 * @param {*} action
 */
exports.returnPayload = function (state, action) {
    return action.payload;
};
exports.mergePayload = function (state, action) {
    return (0, _assign2.default)({}, state, action.payload);
};
function createPayloadReducer(type) {
    return redux_actions_1.handleActions((0, _defineProperty3.default)({}, type, function (state, action) {
        return (0, _assign2.default)((0, _assign2.default)({}, state), action.payload);
    }), {});
}
exports.createPayloadReducer = createPayloadReducer;

/***/ }),

/***/ "C8Si":
/*!*********************************!*\
  !*** ./src/reducer/app-data.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
var redux_actions_2 = __webpack_require__(/*! redux-actions */ "6SzI");
var reducerHelper_1 = __webpack_require__(/*! ../utils/reducerHelper */ "8EKs");
exports.appConfig = redux_actions_2.handleActions({}, {});
exports.APP_READY = "APP_READY";
var isReady = redux_actions_1.handleAction(exports.APP_READY, reducerHelper_1.returnPayload, false);
var appDataReducer = redux_1.combineReducers({
    isReady: isReady
});
exports.default = appDataReducer;

/***/ }),

/***/ "DIv3":
/*!************************************!*\
  !*** ./src/utils/reducePromise.ts ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * some epic like this
 */
exports.default = function (tasks, initContext) {
    return new _promise2.default(function (resolve) {
        tasks.reduce(function (acc, cur, curIndex, arr) {
            return acc.then(function (x) {
                // last promise,wait for final resove
                if (arr.length === curIndex + 1) {
                    return cur(x).then(function (final) {
                        return resolve(final);
                    });
                } else {
                    return cur(x);
                }
            });
        }, _promise2.default.resolve(initContext));
    });
};

/***/ }),

/***/ "FdW2":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/index.css ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Heiti SC\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\n#index_root_4PyOE {\n  height: 100%;\n  width: 100%;\n}\n\n* {\n  box-sizing: border-box;\n  position: relative;\n}\n\n@keyframes rotate-preview {\n  0% {\n    transform: rotate3d(0, 0, 0, 90deg);\n  }\n  50% {\n    transform: rotate3d(1, 0, 0, 90deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 0, 90deg);\n  }\n}\n\n/*div::-webkit-scrollbar {*/\n\n/*background: transparent;*/\n\n/*width: 10px;*/\n\n/*}*/\n\n/*div:hover::-webkit-scrollbar {*/\n\n/*background: #CCC;*/\n\n/*width: 10px;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar:hover {*/\n\n/*background: #CCC;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar-track:hover {*/\n\n/*background: #CCC;*/\n\n/*border-radius: 10px;*/\n\n/*}*/\n\n/*div::-webkit-scrollbar-thumb {*/\n\n/*width: 9px;*/\n\n/*border-radius: 8px;*/\n\n/*background: gray;*/\n\n/*}*/\n", ""]);

// exports
exports.locals = {
	"root": "index_root_4PyOE"
};

/***/ }),

/***/ "IxnR":
/*!***************************************!*\
  !*** ./src/assets/icons/suo_fang.png ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjDBcLNC9IlGDkAAAB30lEQVQ4y5WVQWsTQRiGn9kd02gTEygt9BQ8dCGExEKxnjwFxOLFS8+ioOA/qB6sjReP/gKheBSPorTkD1hCMbaI9SC0CKUBSdJLm276edjNdnfVnc3sZWf2e973m/lmZhUwQQWHPIp0TThmj11ObSa4SZXLKUEARZZZshzaXKea2jMsMIWrcbAQQ5pRzGsWjiafjBb1TOaidy49t3PmS+a1IWV5Mb+0KIH8ZG7/4N57H1faNLe3e1+OvNehLFfrdSjozsCzNMG0eq2ul8NqreI0m3MlK8jVSrGuFhaqMf/wzvrmu6/hT2YYQBq1+7fXN9bathoX9tHn7fjimuH/omZYVspRVIUkbBaS6VvTWz9e7o5QmysnH36dyGgtH5u8IZKw8M9SSQwSXz4611AvgIv69Y2Fq4GArJSflg0HJoBlJrO0WCv64dKoPblrIKNpB9vfL86rb6Zz/nepEupqgsdAY/BQVsdAY0dyuVpx3nxaa6P86qqU8LlM5ur1ZvNn/8E1b6TdbfXTwarn7h/AXOlZyR9QHz+3tpK9FY9GAdOXCtoKBR8Num6isWiOKXhbo3PWGcSEk237NhlmgzAVeZKbsGPzmyxTKa+jC1fhO9s2Qw5xyZEZ40fXZ4dtTv8ADUSivMU23a4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMjNUMTE6NTI6NDcrMDA6MDBM43B1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTIzVDExOjUyOjQ3KzAwOjAwPb7IyQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "KP1v":
/*!*******************************!*\
  !*** ./src/container/App.tsx ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var react_router_1 = __webpack_require__(/*! react-router */ "dtw8");
var DicomPage_1 = __webpack_require__(/*! ./DicomPage */ "zDtY");

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { style: {
                        height: "100%",
                        width: "100%"
                    } },
                React.createElement(
                    react_router_1.Switch,
                    null,
                    React.createElement(react_router_1.Route, { path: "/", component: DicomPage_1.default })
                )
            );
        }
    }]);
    return App;
}(React.Component);

App.displayName = "App";
exports.default = App;

/***/ }),

/***/ "O3TY":
/*!*****************************!*\
  !*** ./src/action/index.ts ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! react-hot-loader/patch */ "87sv");
var _ = __webpack_require__(/*! lodash */ "LvDl");
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var common = __webpack_require__(/*! ./common */ "Z+qe");
var actionList = {
    common: common
};
exports.mapAppActions = function (dispatch) {
    return {
        actions: _.mapValues(actionList, function (action) {
            return redux_1.bindActionCreators(action, dispatch);
        })
    };
};
exports.conbinedActions = actionList;

/***/ }),

/***/ "YeJN":
/*!******************************!*\
  !*** ./src/reducer/index.ts ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var app_data_1 = __webpack_require__(/*! ./app-data */ "C8Si");
var State = {
    appData: app_data_1.default
};
exports.default = State;

/***/ }),

/***/ "Z+qe":
/*!******************************!*\
  !*** ./src/action/common.ts ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ "6SzI");
var app_data_1 = __webpack_require__(/*! ../reducer/app-data */ "C8Si");
exports.setIsReady = redux_actions_1.createAction(app_data_1.APP_READY);

/***/ }),

/***/ "cI62":
/*!******************************************!*\
  !*** ./src/container/DicomPage/style.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(/*! styled-components */ "vOnD");
var suoFang = __webpack_require__(/*! ../../assets/icons/suo_fang.png */ "IxnR");
exports.Background = styled_components_1.default.div.withConfig({
  displayName: "style__Background",
  componentId: "hbtz7n-0"
})(["background:#000;display:flex;font-size:0.2rem;height:100%;"]);
exports.Layout = styled_components_1.default.div.withConfig({
  displayName: "style__Layout",
  componentId: "hbtz7n-1"
})(["width:100%;height:100%;margin:0.05rem;"]);
exports.Head = styled_components_1.default.div.withConfig({
  displayName: "style__Head",
  componentId: "hbtz7n-2"
})(["display:flex;height:1rem;margin:0;"]);
exports.Line = styled_components_1.default.div.withConfig({
  displayName: "style__Line",
  componentId: "hbtz7n-3"
})(["background:#0a0;height:100%;height:1px;"]);
exports.Body = styled_components_1.default.div.withConfig({
  displayName: "style__Body",
  componentId: "hbtz7n-4"
})(["display:flex;flex-direction:row;margin:0;height:100%;"]);
exports.Left = styled_components_1.default.div.withConfig({
  displayName: "style__Left",
  componentId: "hbtz7n-5"
})(["margin-left:0;height:100%;width:6rem;"]);
exports.Center = styled_components_1.default.div.withConfig({
  displayName: "style__Center",
  componentId: "hbtz7n-6"
})(["background:#00a;width:100%;height:100%;border:0.01rem solid #0a0;"]);
exports.Button = styled_components_1.default.div.withConfig({
  displayName: "style__Button",
  componentId: "hbtz7n-7"
})(["background:url(", ") 0.2rem 0.2rem/0.4rem 0.4rem no-repeat;padding:0.7rem 0 0.05rem 0;font-size:0.16rem;text-align:center;line-height:0.18rem;letter-spacing:0;height:1rem;width:0.8rem;color:#fff;cursor:pointer;&:hover{background-color:#555;}"], suoFang);

/***/ }),

/***/ "e5Za":
/*!****************************!*\
  !*** ./src/tasks/index.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var init_store_1 = __webpack_require__(/*! ./init-store */ "nyzS");
var init_ui_1 = __webpack_require__(/*! ./init-ui */ "g4P1");
// 初始化任务列表,按顺序执行
exports.default = [init_store_1.default, init_ui_1.default];

/***/ }),

/***/ "g4P1":
/*!*******************************!*\
  !*** ./src/tasks/init-ui.tsx ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var ReactDOM = __webpack_require__(/*! react-dom */ "i8i4");
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "L342");
var react_router_1 = __webpack_require__(/*! react-router */ "dtw8");
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "0cfB");
exports.ExperimentsContext = React.createContext("Experiments"); // must before app
var App_1 = __webpack_require__(/*! ../container/App */ "KP1v");
function renderApp(store, history, exp) {
  // eslint-disable-next-line
  return ReactDOM.render(React.createElement(
    react_hot_loader_1.AppContainer,
    null,
    React.createElement(
      exports.ExperimentsContext.Provider,
      { value: exp },
      React.createElement(
        react_redux_1.Provider,
        { store: store },
        React.createElement(
          react_router_redux_1.ConnectedRouter,
          { history: history },
          React.createElement(react_router_1.Route, { path: "/", component: App_1.default })
        )
      )
    )
  ), document.getElementById("root"));
}
exports.default = function (context) {
  renderApp(context.store, context.history, context.exp);
  // Webpack Hot Module Replacement API
  if (false) {}
  return _promise2.default.resolve(context);
};

/***/ }),

/***/ "nyzS":
/*!*********************************!*\
  !*** ./src/tasks/init-store.ts ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "4d7F");

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "P2sY");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "GQeE");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "sINF");
var redux_1 = __webpack_require__(/*! redux */ "ANjH");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "L342");
var history_1 = __webpack_require__(/*! history */ "LhCv");
var reducer_1 = __webpack_require__(/*! ../reducer */ "YeJN");
var _ = __webpack_require__(/*! lodash */ "LvDl");
var action_1 = __webpack_require__(/*! ../action */ "O3TY");
var ignoreAction = {
    SEND_AOC_DATA: true,
    "finish: SEND_AOC_DATA": true,
    HANDLER_FOR: true,
    SET_LEFT_TIME: true
};
exports.default = function (context) {
    // use chrome extension
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: (0, _keys2.default)(ignoreAction)
    }) || redux_1.compose;
    // history
    var history = history_1.createBrowserHistory();
    var middlewares = [redux_thunk_1.default, react_router_redux_1.routerMiddleware(history)];
    var store = redux_1.createStore(redux_1.combineReducers((0, _assign2.default)((0, _assign2.default)({}, reducer_1.default), { router: react_router_redux_1.routerReducer })), composeEnhancers(redux_1.applyMiddleware.apply(redux_1, middlewares)));
    var actions = _.mapValues(action_1.conbinedActions, function (action) {
        return redux_1.bindActionCreators(action, store.dispatch);
    });
    window.__AOC_STORE__ = store;
    window.__GET_ROOM_SUMMARY__ = function () {
        return getRoomSummary$(store.getState());
    };
    return _promise2.default.resolve((0, _assign2.default)((0, _assign2.default)({}, context), { store: store, history: history, actions: actions }));
};

/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader??ref--9-1!./index.css */ "FdW2");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "zDtY":
/*!*******************************************!*\
  !*** ./src/container/DicomPage/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "q1tI");
var react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
var action_1 = __webpack_require__(/*! ../../action */ "O3TY");
var style_1 = __webpack_require__(/*! ./style */ "cI62");
function mapStateToProps() {
  return {};
}

var DicomPage = function (_React$Component) {
  (0, _inherits3.default)(DicomPage, _React$Component);

  function DicomPage(props) {
    (0, _classCallCheck3.default)(this, DicomPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DicomPage.__proto__ || (0, _getPrototypeOf2.default)(DicomPage)).call(this, props));

    _this.state = {
      isConfirmModalShow: false
    };
    return _this;
  }

  (0, _createClass3.default)(DicomPage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        style_1.Background,
        null,
        React.createElement(
          style_1.Layout,
          null,
          React.createElement(
            style_1.Head,
            null,
            React.createElement(
              style_1.Button,
              null,
              "\u653E\u5927"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u5C42\u7EA7"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u79FB\u52A8"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u957F\u5EA6"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u89D2\u5EA6"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u6D4B\u91CF"
            ),
            React.createElement(
              style_1.Button,
              null,
              "\u590D\u539F"
            )
          ),
          React.createElement(style_1.Line, null),
          React.createElement(
            style_1.Body,
            null,
            React.createElement(
              style_1.Left,
              null,
              React.createElement(
                "div",
                null,
                "\u6211\u662F\u4FA7\u8FB9\u680F"
              )
            ),
            React.createElement(
              style_1.Center,
              null,
              React.createElement(
                "div",
                null,
                "\u7167\u7247\u533A"
              )
            )
          )
        )
      );
    }
  }]);
  return DicomPage;
}(React.Component);

exports.default = react_redux_1.connect(mapStateToProps, action_1.mapAppActions)(DicomPage);

/***/ })

},[["/7QA","manifest","vendor"]]]);
//# sourceMappingURL=app.e11fcc21.js.map