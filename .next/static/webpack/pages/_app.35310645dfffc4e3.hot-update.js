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

/***/ "./components/layouts/navbar.js":
/*!**************************************!*\
  !*** ./components/layouts/navbar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, target, children, ...props } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n        href: href,\n        scroll: false,\n        p: 2,\n        bg: active ? \"glassTeal\" : undefined,\n        color: active ? \"#202023\" : inactiveColor,\n        target: target,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/works\",\n                            path: path,\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/posts\",\n                            path: path,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton,\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                    variant: \"outline\",\n                                    \"aria-label\": \"Options\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuList, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link,\n                                            href: \"/\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link,\n                                            href: \"/Works\",\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link,\n                                            href: \"Posts\",\n                                            children: \"Posts\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Daniel\\\\Side Quests\\\\Personal Website\\\\components\\\\layouts\\\\navbar.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9sYXlvdXRzL25hdmJhci5qcz81MmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4uL2xvZ28nXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEJveCxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIEhlYWRpbmcsXHJcbiAgRmxleCxcclxuICBNZW51LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICB1c2VDb2xvck1vZGVWYWx1ZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgdGFyZ2V0LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcclxuICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBhcz17TmV4dExpbmt9XHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgIHNjcm9sbD17ZmFsc2V9XHJcbiAgICAgIHA9ezJ9XHJcbiAgICAgIGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH1cclxuICAgICAgY29sb3I9e2FjdGl2ZSA/ICcjMjAyMDIzJyA6IGluYWN0aXZlQ29sb3J9XHJcbiAgICAgIHRhcmdldD17dGFyZ2V0fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHBhdGggfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnMjAyMDIzODAnKX1cclxuICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyB9fVxyXG4gICAgICB6SW5kZXg9ezF9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fVxyXG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cclxuICAgICAgICAgIHdpZHRoPXt7IGJhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG5tZDogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3dvcmtzXCIgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgIFdvcmtzXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcG9zdHNcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7IGJhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYXM9e0ljb25CdXR0b259XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcHRpb25zXCJcclxuICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30gaHJlZj1cIi9cIj5BYm91dDwvTWVudUl0ZW0+IFxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9IGhyZWY9XCIvV29ya3NcIj5Xb3JrczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30gaHJlZj1cIlBvc3RzXCI+UG9zdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJhcyIsInNjcm9sbCIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicG9zaXRpb24iLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm10Iiwibm1kIiwiZmxleCIsIm1sIiwiaWNvbiIsInZhcmlhbnQiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/navbar.js\n"));

/***/ })

});