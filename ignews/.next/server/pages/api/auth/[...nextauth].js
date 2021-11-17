"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            scope: 'read:user'\n        }), \n    ],\n    callbacks: {\n        async signIn (user, account, profile) {\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {\n                data: {\n                    email\n                }\n            }));\n            return true;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNYO0FBQ1c7QUFFSTtBQUUvQyxpRUFBZUMsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3JCRyxTQUFTLEVBQUUsQ0FBQztRQUNSRixpRUFBZ0IsQ0FBQyxDQUFDO1lBQ2RJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxLQUFLLEVBQUUsQ0FBVztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNGQyxNQUFNLEVBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUNkLHdEQUFXLENBQ2JILGlEQUFZLENBQ1JBLHFEQUFnQixDQUFDLENBQU8sU0FDeEIsQ0FBQztnQkFBQ29CLElBQUksRUFBRSxDQUFDO29CQUFDQyxLQUFLO2dCQUFDLENBQUM7WUFBQyxDQUFDO1lBSTNCLE1BQU0sQ0FBQyxJQUFJO1FBQ2YsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDLENBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEsIHF1ZXJ5IH0gZnJvbSAnZmF1bmFkYidcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XG4gICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICAgICAgICBxdWVyeS5DcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNvbGxlY3Rpb24oJ3VzZXJzJyksXG4gICAgICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0sXG4gICAgfVxufSlcblxuXG4vLyBpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcbi8vIGltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG4vLyBpbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cbi8vIGltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4vLyAgICAgcHJvdmlkZXJzOiBbXG4vLyAgICAgICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuLy8gICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4vLyAgICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuLy8gICAgICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXG4vLyAgICAgICAgIH0pLFxuLy8gICAgIF0sXG4vLyAgICAgand0OiB7XG4vLyAgICAgICAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LlNJR05JTkdfS0VZXG4vLyAgICAgfSxcbi8vICAgICBjYWxsYmFja3M6IHtcbi8vICAgICAgICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXJcblxuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbi8vICAgICAgICAgICAgICAgICAgICAgcS5DcmVhdGUoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXJzJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfSB9XG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICApXG5cbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuLy8gICAgICAgICAgICAgfSBjYXRjaCB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0sXG4vLyAgICAgfVxuLy8gfSkiXSwibmFtZXMiOlsicXVlcnkiLCJOZXh0QXV0aCIsIlByb3ZpZGVycyIsImZhdW5hIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0QsMkNBQU0sQ0FBQyxDQUFDO0lBQzdCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();