(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingTextEditor"],{

/***/ "./source/src/app/components/Apis/Details/Documents/TextEditor.jsx":
/*!*************************************************************************!*\
  !*** ./source/src/app/components/Apis/Details/Documents/TextEditor.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slide */ \"./node_modules/@material-ui/core/esm/Slide/index.js\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Icon */ \"./node_modules/@material-ui/core/esm/Icon/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-draft-wysiwyg */ \"./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js\");\n/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! draftjs-to-html */ \"./node_modules/draftjs-to-html/lib/draftjs-to-html.js\");\n/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var AppData_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! AppData/api */ \"./source/src/app/data/api.js\");\n/* harmony import */ var AppData_APIProduct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! AppData/APIProduct */ \"./source/src/app/data/APIProduct.js\");\n/* harmony import */ var AppComponents_Shared_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! AppComponents/Shared/Alert */ \"./source/src/app/components/Shared/Alert.jsx\");\n/* harmony import */ var AppComponents_Apis_Details_components_ApiContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! AppComponents/Apis/Details/components/ApiContext */ \"./source/src/app/components/Apis/Details/components/ApiContext.jsx\");\n/* harmony import */ var AppData_AuthManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! AppData/AuthManager */ \"./source/src/app/data/AuthManager.js\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/*\n * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.\n *\n * WSO2 Inc. licenses this file to you under the Apache License,\n * Version 2.0 (the \"License\"); you may not use this file except\n * in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied. See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  appBar: {\n    position: 'relative'\n  },\n  flex: {\n    flex: 1\n  },\n  popupHeader: {\n    display: 'flex',\n    flexDirection: 'row',\n    alignItems: 'center'\n  },\n  splitWrapper: {\n    padding: 0\n  },\n  docName: {\n    alignItems: 'center',\n    display: 'flex'\n  },\n  button: {\n    height: 30,\n    marginLeft: 30\n  }\n};\n\nfunction Transition(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _extends({\n    direction: \"up\"\n  }, props));\n}\n\nfunction TextEditor(props) {\n  var _this = this;\n\n  var intl = props.intl,\n      apiType = props.apiType,\n      showAtOnce = props.showAtOnce,\n      history = props.history,\n      docId = props.docId;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(AppComponents_Apis_Details_components_ApiContext__WEBPACK_IMPORTED_MODULE_18__[\"default\"]),\n      api = _useContext.api,\n      isAPIProduct = _useContext.isAPIProduct;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(showAtOnce),\n      _useState2 = _slicedToArray(_useState, 2),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(draft_js__WEBPACK_IMPORTED_MODULE_12__[\"EditorState\"].createEmpty()),\n      _useState4 = _slicedToArray(_useState3, 2),\n      editorState = _useState4[0],\n      setEditorState = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      isUpdating = _useState6[0],\n      setIsUpdating = _useState6[1];\n\n  var onEditorStateChange = function onEditorStateChange(newEditorState) {\n    setEditorState(newEditorState);\n  };\n\n  var toggleOpen = function toggleOpen() {\n    if (!open) updateDoc();\n\n    if (open && showAtOnce) {\n      var urlPrefix = isAPIProduct ? 'api-products' : 'apis';\n      var listingPath = \"/\".concat(urlPrefix, \"/\").concat(api.id, \"/documents\");\n      history.push(listingPath);\n    }\n\n    setOpen(!open);\n  };\n\n  var addContentToDoc = function addContentToDoc() {\n    var restAPI = isAPIProduct ? new AppData_APIProduct__WEBPACK_IMPORTED_MODULE_16__[\"default\"]() : new AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"]();\n    setIsUpdating(true);\n    var contentToSave = draftjs_to_html__WEBPACK_IMPORTED_MODULE_14___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_12__[\"convertToRaw\"])(editorState.getCurrentContent()));\n    var docPromise = restAPI.addInlineContentToDocument(api.id, docId, 'INLINE', contentToSave);\n    docPromise.then(function (response) {\n      AppComponents_Shared_Alert__WEBPACK_IMPORTED_MODULE_17__[\"default\"].info(\"\".concat(response.obj.name, \" \").concat(intl.formatMessage({\n        id: 'Apis.Details.Documents.TextEditor.update.success.message',\n        defaultMessage: 'updated successfully.'\n      })));\n      toggleOpen();\n      setIsUpdating(false);\n    }).catch(function (error) {\n      if (true) {\n        console.log(error);\n      }\n\n      AppComponents_Shared_Alert__WEBPACK_IMPORTED_MODULE_17__[\"default\"].error(\"\".concat(error, \" \").concat(intl.formatMessage({\n        id: 'Apis.Details.Documents.TextEditor.update.error.message',\n        defaultMessage: 'update failed.'\n      })));\n      setIsUpdating(false);\n    });\n  };\n\n  var updateDoc = function updateDoc() {\n    var restAPI = isAPIProduct ? new AppData_APIProduct__WEBPACK_IMPORTED_MODULE_16__[\"default\"]() : new AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"]();\n    var docPromise = restAPI.getInlineContentOfDocument(api.id, docId);\n    docPromise.then(function (doc) {\n      var blocksFromHTML = Object(draft_js__WEBPACK_IMPORTED_MODULE_12__[\"convertFromHTML\"])(doc.text);\n      var state = draft_js__WEBPACK_IMPORTED_MODULE_12__[\"ContentState\"].createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);\n      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_12__[\"EditorState\"].createWithContent(state));\n    }).catch(function (error) {\n      if (true) {\n        console.log(error);\n      }\n\n      var status = error.status;\n\n      if (status === 404) {\n        _this.setState({\n          apiNotFound: true\n        });\n      }\n    });\n  };\n\n  var classes = props.classes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onClick: toggleOpen,\n    disabled: Object(AppData_AuthManager__WEBPACK_IMPORTED_MODULE_19__[\"isRestricted\"])(['apim:api_create', 'apim:api_publish'], api)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, \"description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n    id: \"Apis.Details.Documents.TextEditor.edit.content\",\n    defaultMessage: \"Edit Content\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    fullScreen: true,\n    open: open,\n    onClose: toggleOpen,\n    TransitionComponent: Transition\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    square: true,\n    className: classes.popupHeader\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    color: \"inherit\",\n    onClick: toggleOpen,\n    \"aria-label\": \"Close\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, \"close\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    variant: \"h4\",\n    className: classes.docName\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n    id: \"Apis.Details.Documents.TextEditor.edit.content.of\",\n    defaultMessage: \"Edit Content of\"\n  }), ' ', \"\\\"\", props.docName, \"\\\"\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.button,\n    variant: \"contained\",\n    disabled: isUpdating,\n    color: \"primary\",\n    onClick: addContentToDoc\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n    id: \"Apis.Details.Documents.TextEditor.update.content.button\",\n    defaultMessage: \"Update Content\"\n  }), isUpdating && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n    size: 24\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.button,\n    onClick: toggleOpen\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], {\n    id: \"Apis.Details.Documents.TextEditor.cancel.button\",\n    defaultMessage: \"Cancel\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.splitWrapper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_13__[\"Editor\"], {\n    editorState: editorState,\n    wrapperClassName: \"draftjs-wrapper\",\n    editorClassName: \"draftjs-editor\",\n    onEditorStateChange: onEditorStateChange\n  }))));\n}\n\nTextEditor.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({}).isRequired,\n  docId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  apiType: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"].CONSTS.API, AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"].CONSTS.APIProduct]).isRequired,\n  intl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({}).isRequired,\n  showAtOnce: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,\n  api: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n    apiType: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"].CONSTS.API, AppData_api__WEBPACK_IMPORTED_MODULE_15__[\"default\"].CONSTS.APIProduct])\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"injectIntl\"])(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])(styles)(TextEditor))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL0FwaXMvRGV0YWlscy9Eb2N1bWVudHMvVGV4dEVkaXRvci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL0FwaXMvRGV0YWlscy9Eb2N1bWVudHMvVGV4dEVkaXRvci5qc3g/ODJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LCBXU08yIEluYy4gKGh0dHA6Ly93d3cud3NvMi5vcmcpIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogV1NPMiBJbmMuIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLFxuICogVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCB7IEVkaXRvclN0YXRlLCBjb252ZXJ0VG9SYXcsIENvbnRlbnRTdGF0ZSwgY29udmVydEZyb21IVE1MIH0gZnJvbSAnZHJhZnQtanMnO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAncmVhY3QtZHJhZnQtd3lzaXd5Zyc7XG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSAnZHJhZnRqcy10by1odG1sJztcbmltcG9ydCBBcGkgZnJvbSAnQXBwRGF0YS9hcGknO1xuaW1wb3J0IEFQSVByb2R1Y3QgZnJvbSAnQXBwRGF0YS9BUElQcm9kdWN0JztcbmltcG9ydCBBbGVydCBmcm9tICdBcHBDb21wb25lbnRzL1NoYXJlZC9BbGVydCc7XG5pbXBvcnQgQVBJQ29udGV4dCBmcm9tICdBcHBDb21wb25lbnRzL0FwaXMvRGV0YWlscy9jb21wb25lbnRzL0FwaUNvbnRleHQnO1xuaW1wb3J0IHsgaXNSZXN0cmljdGVkIH0gZnJvbSAnQXBwRGF0YS9BdXRoTWFuYWdlcic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcEJhcjoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICAgIGZsZXg6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICB9LFxuICAgIHBvcHVwSGVhZGVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgc3BsaXRXcmFwcGVyOiB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgICBkb2NOYW1lOiB7XG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgbWFyZ2luTGVmdDogMzAsXG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj0ndXAnIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIFRleHRFZGl0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGludGwsIGFwaVR5cGUsIHNob3dBdE9uY2UsIGhpc3RvcnksIGRvY0lkLFxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGFwaSwgaXNBUElQcm9kdWN0IH0gPSB1c2VDb250ZXh0KEFQSUNvbnRleHQpO1xuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoc2hvd0F0T25jZSk7XG5cbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xuICAgIGNvbnN0IFtpc1VwZGF0aW5nLCBzZXRJc1VwZGF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAobmV3RWRpdG9yU3RhdGUpID0+IHtcbiAgICAgICAgc2V0RWRpdG9yU3RhdGUobmV3RWRpdG9yU3RhdGUpO1xuICAgIH07XG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFvcGVuKSB1cGRhdGVEb2MoKTtcblxuICAgICAgICBpZiAob3BlbiAmJiBzaG93QXRPbmNlKSB7XG4gICAgICAgICAgICBjb25zdCB1cmxQcmVmaXggPSBpc0FQSVByb2R1Y3QgPyAnYXBpLXByb2R1Y3RzJyA6ICdhcGlzJztcbiAgICAgICAgICAgIGNvbnN0IGxpc3RpbmdQYXRoID0gYC8ke3VybFByZWZpeH0vJHthcGkuaWR9L2RvY3VtZW50c2A7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2gobGlzdGluZ1BhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHNldE9wZW4oIW9wZW4pO1xuICAgIH07XG4gICAgY29uc3QgYWRkQ29udGVudFRvRG9jID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN0QVBJID0gaXNBUElQcm9kdWN0ID8gbmV3IEFQSVByb2R1Y3QoKSA6IG5ldyBBcGkoKTtcbiAgICAgICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgY29udGVudFRvU2F2ZSA9IGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSk7XG4gICAgICAgIGNvbnN0IGRvY1Byb21pc2UgPSByZXN0QVBJLmFkZElubGluZUNvbnRlbnRUb0RvY3VtZW50KGFwaS5pZCwgZG9jSWQsICdJTkxJTkUnLCBjb250ZW50VG9TYXZlKTtcbiAgICAgICAgZG9jUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgQWxlcnQuaW5mbyhgJHtyZXNwb25zZS5vYmoubmFtZX0gJHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ0FwaXMuRGV0YWlscy5Eb2N1bWVudHMuVGV4dEVkaXRvci51cGRhdGUuc3VjY2Vzcy5tZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICd1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgICAgICAgICAgIH0pfWApO1xuICAgICAgICAgICAgICAgIHRvZ2dsZU9wZW4oKTtcbiAgICAgICAgICAgICAgICBzZXRJc1VwZGF0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBBbGVydC5lcnJvcihgJHtlcnJvcn0gJHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ0FwaXMuRGV0YWlscy5Eb2N1bWVudHMuVGV4dEVkaXRvci51cGRhdGUuZXJyb3IubWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiAndXBkYXRlIGZhaWxlZC4nLFxuICAgICAgICAgICAgICAgIH0pfWApO1xuICAgICAgICAgICAgICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVEb2MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3RBUEkgPSBpc0FQSVByb2R1Y3QgPyBuZXcgQVBJUHJvZHVjdCgpIDogbmV3IEFwaSgpO1xuXG4gICAgICAgIGNvbnN0IGRvY1Byb21pc2UgPSByZXN0QVBJLmdldElubGluZUNvbnRlbnRPZkRvY3VtZW50KGFwaS5pZCwgZG9jSWQpO1xuICAgICAgICBkb2NQcm9taXNlXG4gICAgICAgICAgICAudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tzRnJvbUhUTUwgPSBjb252ZXJ0RnJvbUhUTUwoZG9jLnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gQ29udGVudFN0YXRlLmNyZWF0ZUZyb21CbG9ja0FycmF5KGJsb2Nrc0Zyb21IVE1MLmNvbnRlbnRCbG9ja3MsIGJsb2Nrc0Zyb21IVE1MLmVudGl0eU1hcCk7XG5cbiAgICAgICAgICAgICAgICBzZXRFZGl0b3JTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChzdGF0ZSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwaU5vdEZvdW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU9wZW59IGRpc2FibGVkPXtpc1Jlc3RyaWN0ZWQoWydhcGltOmFwaV9jcmVhdGUnLCAnYXBpbTphcGlfcHVibGlzaCddLCBhcGkpfT5cbiAgICAgICAgICAgICAgICA8SWNvbj5kZXNjcmlwdGlvbjwvSWNvbj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nQXBpcy5EZXRhaWxzLkRvY3VtZW50cy5UZXh0RWRpdG9yLmVkaXQuY29udGVudCcgZGVmYXVsdE1lc3NhZ2U9J0VkaXQgQ29udGVudCcgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPERpYWxvZyBmdWxsU2NyZWVuIG9wZW49e29wZW59IG9uQ2xvc2U9e3RvZ2dsZU9wZW59IFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259PlxuICAgICAgICAgICAgICAgIDxQYXBlciBzcXVhcmUgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9J2luaGVyaXQnIG9uQ2xpY2s9e3RvZ2dsZU9wZW59IGFyaWEtbGFiZWw9J0Nsb3NlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uPmNsb3NlPC9JY29uPlxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjbGFzc05hbWU9e2NsYXNzZXMuZG9jTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdBcGlzLkRldGFpbHMuRG9jdW1lbnRzLlRleHRFZGl0b3IuZWRpdC5jb250ZW50Lm9mJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdFZGl0IENvbnRlbnQgb2YnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICBcIntwcm9wcy5kb2NOYW1lfVwiXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIGRpc2FibGVkPXtpc1VwZGF0aW5nfSBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17YWRkQ29udGVudFRvRG9jfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J0FwaXMuRGV0YWlscy5Eb2N1bWVudHMuVGV4dEVkaXRvci51cGRhdGUuY29udGVudC5idXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J1VwZGF0ZSBDb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VwZGF0aW5nICYmIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI0fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17dG9nZ2xlT3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdBcGlzLkRldGFpbHMuRG9jdW1lbnRzLlRleHRFZGl0b3IuY2FuY2VsLmJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGxpdFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPSdkcmFmdGpzLXdyYXBwZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9J2RyYWZ0anMtZWRpdG9yJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5UZXh0RWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgZG9jSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhcGlUeXBlOiBQcm9wVHlwZXMub25lT2YoW0FwaS5DT05TVFMuQVBJLCBBcGkuQ09OU1RTLkFQSVByb2R1Y3RdKS5pc1JlcXVpcmVkLFxuICAgIGludGw6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBzaG93QXRPbmNlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGFwaTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFwaVR5cGU6IFByb3BUeXBlcy5vbmVPZihbQXBpLkNPTlNUUy5BUEksIEFwaS5DT05TVFMuQVBJUHJvZHVjdF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhSb3V0ZXIod2l0aFN0eWxlcyhzdHlsZXMpKFRleHRFZGl0b3IpKSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQW5CQTtBQUNBO0FBd0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEVBO0FBd0VBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/src/app/components/Apis/Details/Documents/TextEditor.jsx\n");

/***/ })

}]);