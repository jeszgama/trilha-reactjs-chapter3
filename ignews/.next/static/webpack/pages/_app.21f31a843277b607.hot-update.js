"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": function() { return /* binding */ SignInButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction SignInButton() {\n    var isUserLoggedIn = true;\n    return isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().signInButton),\n        __source: {\n            fileName: \"/home/jessica/projetos/trilha-reactjs-chapter3-fundamentos_do_next.js/ignews/src/components/SignInButton/index.tsx\",\n            lineNumber: 10\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                color: \"#04d361\",\n                __source: {\n                    fileName: \"/home/jessica/projetos/trilha-reactjs-chapter3-fundamentos_do_next.js/ignews/src/components/SignInButton/index.tsx\",\n                    lineNumber: 14\n                },\n                __self: this\n            }),\n            \"J\\xe9ssica Gama\",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().closeIcon),\n                __source: {\n                    fileName: \"/home/jessica/projetos/trilha-reactjs-chapter3-fundamentos_do_next.js/ignews/src/components/SignInButton/index.tsx\",\n                    lineNumber: 16\n                },\n                __self: this\n            })\n        ]\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n        __source: {\n            fileName: \"/home/jessica/projetos/trilha-reactjs-chapter3-fundamentos_do_next.js/ignews/src/components/SignInButton/index.tsx\",\n            lineNumber: 19\n        },\n        __self: this\n    });\n}\n_c = SignInButton;\nvar _c;\n$RefreshReg$(_c, \"SignInButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNMO0FBRUs7QUFFbEMsU0FBU0csWUFBWSxHQUFHLENBQUM7SUFDNUIsR0FBSyxDQUFDQyxjQUFjLEdBQUcsSUFBSTtJQUUzQixNQUFNLENBQUNBLGNBQWMseUVBQ2hCQyxDQUFNO1FBQ0hDLElBQUksRUFBQyxDQUFRO1FBQ2JDLFNBQVMsRUFBRUwseUVBQW1COzs7Ozs7O2lGQUU3QkYsb0RBQVE7Z0JBQUNTLEtBQUssRUFBQyxDQUFTOzs7Ozs7O1lBQUUsQ0FFM0I7aUZBQUNSLCtDQUFHO2dCQUFDUSxLQUFLLEVBQUMsQ0FBUztnQkFBQ0YsU0FBUyxFQUFFTCxzRUFBZ0I7Ozs7Ozs7OzhFQUduREcsQ0FBTTs7Ozs7OztBQU1mLENBQUM7S0FuQmVGLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL2luZGV4LnRzeD9jYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduSW5CdXR0b24oKSB7XG4gICAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzVXNlckxvZ2dlZEluID8oXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25JbkJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEZhR2l0aHViIGNvbG9yPVwiIzA0ZDM2MVwiLz5cbiAgICAgICAgICAgIErDqXNzaWNhIEdhbWFcbiAgICAgICAgICAgIDxGaVggY29sb3I9XCIjNzM3MzgwXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VJY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgIFxuICAgICAgICA+XG5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJGYUdpdGh1YiIsIkZpWCIsInN0eWxlcyIsIlNpZ25JbkJ1dHRvbiIsImlzVXNlckxvZ2dlZEluIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInNpZ25JbkJ1dHRvbiIsImNvbG9yIiwiY2xvc2VJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ })

});