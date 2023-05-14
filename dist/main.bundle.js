"use strict";
(self["webpackChunkweather_api_practice"] = self["webpackChunkweather_api_practice"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./DarumadropOne-Regular.ttf */ "./src/DarumadropOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'myFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('tff') !important;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n  background-color:wheat;\n}\n\n.searchAndCard { \n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.searchBarDiv { \n  transition: ease-in-out 200ms;\n  align-items: center;\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: rgba(255, 255,255, 0.5);\n  /* border:solid 1px rgba(255, 255,255, ); */\n  padding-left: 20px;\n  font-size: 20px;\n  justify-content: space-between;\n  animation-delay: 2s;\n  animation: animator 1s ease-in-out ;\n\n}\n\n@keyframes animator {\n  from {\nopacity:0%;\ntransform: translateY(-50px)\n}\n\nto {\nopacity: 100%;\ntransform: translateY(0px)\n}\n}\n\n@keyframes slidup {\n  from {\n    opacity: 0%;\n    transform: translateY(50px)\n\n  }\n  to {\n    opacity: 100%;\n    transform: translateY(0px)\n\n  }\n}\n\n\n\n\n.searchBarDiv:hover {\n  border-width: 2px;\n  cursor: pointer;\n  background-color:rgba(255, 255,255, 1);\n}\n\nform {\n  width:100%;\n  display: flex;\n}\n\n.searchIconek {\n  cursor: pointer;\n  margin-right: 10px;\n  height: 80%;\n  border: solid 1px black;\n  border-radius: 20px;\n}\n\n.ikona:hover {\n  background-color: white;\n  border: solid grey 1px;\n}\n\ninput {\n  flex: 1;\n  background: none;\n  border: none;\n  font-size: 23px;\n  outline: none;\n  height: 40px;\n}\n\n.weatherCard {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 700px;\n  border-radius: 30px;\n  animation: slidup 200ms ease-in-out;\n\n}\n\n.weatherCard > *{\n  color: antiquewhite;\n  text-align: center;\n}\n\n.location {\n  padding: 25px 10px;\n  padding-bottom: 0px;\n  font-size:25px ;\n}\n\n.currentTemp {\n  font-size: 100px;\n}\n\n.condition {\n  font-size: 20px;\n  margin-bottom:20px ;\n\n}\n\n.extraInfo {\n  padding: 5px 10px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  border-bottom: solid 1px rgba(255,255,255,.4);\n\n}\n\n.extraInfo> * {\n  white-space: pre;\n  font-size: 20px;\n  text-align: center;\n  flex: 1;\n}\n\n.extraInfo> *:not(:last-child){\n  border-right: solid 2px rgba(255,255,255,.4);\n}\n\n.forecastSection {\n  padding: 20px;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 45% 45%;\n  grid-template-rows: 100%;\n  justify-content: space-between;\n\n}\n\n.forecastDay {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 1fr 20px 0.5fr 0.5fr;\n  border-radius: 20px;\n  background-color: rgba(255, 255,255, 0.2);\n  /* justify-content: center; */\n  /* align-items: center; */\n\n}\n\n.forecastDay > * {\n/* border: solid 1px red; */\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n.forecastDayHeader {\npadding-top: 5px;\nborder-bottom: solid 1px rgba(255, 255,255, 0.2);\n}\n\n.forecastIcon {\n  justify-self: center;\n  width: 100%;\n}\n\n.forecastTemp {\n  font-size: 30px;\n}\n\n.forecastRainChance {\n  font-size: 25px;\n}\n\n@keyframes shake { \n  0% { \n    opacity: 100%;\n  }\n  25% { \n    transform: translateX(-10px);\n    opacity: 50%;\n  }\n  50% { \n    opacity: 0%;\n    transform: translateX(0px);\n  }\n  75% { \n    opacity: 50%;\n    transform: translateX(10px);\n  }\n  100% { \n    opacity: 100%;\n    transform: translateX(0px);\n  }\n}\n\n.shake {\n  animation: shake 200ms ease-in-out;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,qEAAgE;AAClE;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,6EAA6E;AAC/E;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,yCAAyC;EACzC,2CAA2C;EAC3C,kBAAkB;EAClB,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,mCAAmC;;AAErC;;AAEA;EACE;AACF,UAAU;AACV;AACA;;AAEA;AACA,aAAa;AACb;AACA;AACA;;AAEA;EACE;IACE,WAAW;IACX;;EAEF;EACA;IACE,aAAa;IACb;;EAEF;AACF;;;;;AAKA;EACE,iBAAiB;EACjB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mCAAmC;;AAErC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;;AAErB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,6CAA6C;;AAE/C;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,OAAO;AACT;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,wBAAwB;EACxB,8BAA8B;;AAEhC;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,6CAA6C;EAC7C,mBAAmB;EACnB,yCAAyC;EACzC,6BAA6B;EAC7B,yBAAyB;;AAE3B;;AAEA;AACA,2BAA2B;AAC3B,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;AACA,gBAAgB;AAChB,gDAAgD;AAChD;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,4BAA4B;IAC5B,YAAY;EACd;EACA;IACE,WAAW;IACX,0BAA0B;EAC5B;EACA;IACE,YAAY;IACZ,2BAA2B;EAC7B;EACA;IACE,aAAa;IACb,0BAA0B;EAC5B;AACF;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":["@font-face {\n  font-family: 'myFont';\n  src: url('./DarumadropOne-Regular.ttf') format('tff') !important;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n  background-color:wheat;\n}\n\n.searchAndCard { \n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.searchBarDiv { \n  transition: ease-in-out 200ms;\n  align-items: center;\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: rgba(255, 255,255, 0.5);\n  /* border:solid 1px rgba(255, 255,255, ); */\n  padding-left: 20px;\n  font-size: 20px;\n  justify-content: space-between;\n  animation-delay: 2s;\n  animation: animator 1s ease-in-out ;\n\n}\n\n@keyframes animator {\n  from {\nopacity:0%;\ntransform: translateY(-50px)\n}\n\nto {\nopacity: 100%;\ntransform: translateY(0px)\n}\n}\n\n@keyframes slidup {\n  from {\n    opacity: 0%;\n    transform: translateY(50px)\n\n  }\n  to {\n    opacity: 100%;\n    transform: translateY(0px)\n\n  }\n}\n\n\n\n\n.searchBarDiv:hover {\n  border-width: 2px;\n  cursor: pointer;\n  background-color:rgba(255, 255,255, 1);\n}\n\nform {\n  width:100%;\n  display: flex;\n}\n\n.searchIconek {\n  cursor: pointer;\n  margin-right: 10px;\n  height: 80%;\n  border: solid 1px black;\n  border-radius: 20px;\n}\n\n.ikona:hover {\n  background-color: white;\n  border: solid grey 1px;\n}\n\ninput {\n  flex: 1;\n  background: none;\n  border: none;\n  font-size: 23px;\n  outline: none;\n  height: 40px;\n}\n\n.weatherCard {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 700px;\n  border-radius: 30px;\n  animation: slidup 200ms ease-in-out;\n\n}\n\n.weatherCard > *{\n  color: antiquewhite;\n  text-align: center;\n}\n\n.location {\n  padding: 25px 10px;\n  padding-bottom: 0px;\n  font-size:25px ;\n}\n\n.currentTemp {\n  font-size: 100px;\n}\n\n.condition {\n  font-size: 20px;\n  margin-bottom:20px ;\n\n}\n\n.extraInfo {\n  padding: 5px 10px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  border-bottom: solid 1px rgba(255,255,255,.4);\n\n}\n\n.extraInfo> * {\n  white-space: pre;\n  font-size: 20px;\n  text-align: center;\n  flex: 1;\n}\n\n.extraInfo> *:not(:last-child){\n  border-right: solid 2px rgba(255,255,255,.4);\n}\n\n.forecastSection {\n  padding: 20px;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 45% 45%;\n  grid-template-rows: 100%;\n  justify-content: space-between;\n\n}\n\n.forecastDay {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 40px 1fr 20px 0.5fr 0.5fr;\n  border-radius: 20px;\n  background-color: rgba(255, 255,255, 0.2);\n  /* justify-content: center; */\n  /* align-items: center; */\n\n}\n\n.forecastDay > * {\n/* border: solid 1px red; */\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n.forecastDayHeader {\npadding-top: 5px;\nborder-bottom: solid 1px rgba(255, 255,255, 0.2);\n}\n\n.forecastIcon {\n  justify-self: center;\n  width: 100%;\n}\n\n.forecastTemp {\n  font-size: 30px;\n}\n\n.forecastRainChance {\n  font-size: 25px;\n}\n\n@keyframes shake { \n  0% { \n    opacity: 100%;\n  }\n  25% { \n    transform: translateX(-10px);\n    opacity: 50%;\n  }\n  50% { \n    opacity: 0%;\n    transform: translateX(0px);\n  }\n  75% { \n    opacity: 50%;\n    transform: translateX(10px);\n  }\n  100% { \n    opacity: 100%;\n    transform: translateX(0px);\n  }\n}\n\n.shake {\n  animation: shake 200ms ease-in-out;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.svg */ "./src/search.svg");



const weatherURL = 'http://api.weatherapi.com/v1/current.json?key=';
const forecastURL = 'http://api.weatherapi.com/v1/forecast.json?key=';
const APIkey = '163c67a6d82b4cea930215935232204';

const mainSelector = document.querySelector('.main');
const searchAndCard = document.createElement('div');
searchAndCard.classList.add('searchAndCard');
mainSelector.appendChild(searchAndCard);

const searchBarDiv = document.createElement('div');
searchBarDiv.classList.add('searchBarDiv');
searchBarDiv.classList.add('searchBarDivTransition');
const form = document.createElement('form');
searchBarDiv.appendChild(form);
const input = document.createElement('input');
input.classList.add('cityInput');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search Place');
form.appendChild(input);
searchAndCard.appendChild(searchBarDiv);

const searchIcon = document.createElement('img');
searchIcon.setAttribute('src', _search_svg__WEBPACK_IMPORTED_MODULE_1__);
searchIcon.classList.add('searchIconek');
searchBarDiv.appendChild(searchIcon);
const inputSelector = document.querySelector('.cityInput');

const searchIconSelector = document.querySelector('.searchIconek');

searchIconSelector.addEventListener('click', async () => {
  if (document.querySelector('.weatherCard')) {
    await refreshData(inputSelector.value);
    shakeCard();
  } else {
    insertApiData(inputSelector.value);
  }
  inputSelector.value = '';
});

function shakeCard() {
  console.log('shaker');
  const weatherCardSelector = document.querySelector('.weatherCard');
  console.log('shakee1r');
  weatherCardSelector.setAttribute('style', 'animation: shake 200ms ease-in-out');
  setTimeout(() => {
    weatherCardSelector.setAttribute('style', 'animation: none');
  }, 2000);
}

function createCard(currentData, forecastData) {
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weatherCard');
  searchAndCard.appendChild(weatherCard);

  // Location Header
  const weatherCardHeader = document.createElement('p');
  weatherCardHeader.textContent = currentData.location;
  weatherCardHeader.classList.add('location');
  weatherCard.appendChild(weatherCardHeader);

  // Current Temperature
  const weatherCardCurrTemp = document.createElement('p');
  weatherCardCurrTemp.classList.add('currentTemp');
  weatherCardCurrTemp.textContent = `${currentData.currentTemp}°C`;
  weatherCard.appendChild(weatherCardCurrTemp);

  // Condition
  const condition = document.createElement('p');
  condition.textContent = currentData.condition;
  condition.classList.add('condition');
  weatherCard.appendChild(condition);

  // 3 Additional Info Div

  const extraInfo = document.createElement('div');
  extraInfo.classList.add('extraInfo');
  weatherCard.appendChild(extraInfo);

  const feelsLikeSection = document.createElement('div');
  feelsLikeSection.textContent = `Feels\r\n${currentData.feelsLike} °C`;
  extraInfo.appendChild(feelsLikeSection);

  const humiditySection = document.createElement('div');
  humiditySection.textContent = `Humidity\r\n${currentData.humidity}%`;
  extraInfo.appendChild(humiditySection);

  const precipitationSection = document.createElement('div');
  precipitationSection.textContent = `Precipitation \r\n${currentData.precipitation} mm`;
  extraInfo.appendChild(precipitationSection);

  // Forecast Section
  const forecast = document.createElement('div');
  forecast.classList.add('forecastSection');
  weatherCard.appendChild(forecast);

  // Tommorow
  const tomorrowDiv = document.createElement('div');
  tomorrowDiv.classList.add('forecastDay');
  tomorrowDiv.classList.add('forecastDayOne');
  forecast.appendChild(tomorrowDiv);

  const tomorrowHeader = document.createElement('p');
  tomorrowHeader.textContent = 'Tomorrow';
  tomorrowHeader.classList.add('forecastDayHeader');
  tomorrowDiv.appendChild(tomorrowHeader);

  const tomorrowIcon = document.createElement('img');
  tomorrowIcon.setAttribute('src', forecastData.dayOne.picture);
  tomorrowIcon.classList.add('forecastIcon');
  tomorrowDiv.appendChild(tomorrowIcon);

  const tomorrowCondition = document.createElement('p');
  tomorrowCondition.textContent = `${forecastData.dayOne.condition}`;
  tomorrowCondition.classList.add('forecastCondition');
  tomorrowDiv.appendChild(tomorrowCondition);

  const tomorrowTemp = document.createElement('p');
  tomorrowTemp.textContent = `${forecastData.dayOne.avTemp} °C`;
  tomorrowTemp.classList.add('forecastTemp');
  tomorrowDiv.appendChild(tomorrowTemp);

  const rainChanceTomorrow = document.createElement('p');
  rainChanceTomorrow.textContent = `${forecastData.dayOne.rainChance}%`;
  rainChanceTomorrow.classList.add('forecastRainChance');
  tomorrowDiv.appendChild(rainChanceTomorrow);

  // AfterTommorow
  const afterTomorrowDiv = document.createElement('div');
  afterTomorrowDiv.classList.add('forecastDay');
  afterTomorrowDiv.classList.add('forecastDayTwo');
  forecast.appendChild(afterTomorrowDiv);
  const afterTomorrowHeader = document.createElement('p');
  afterTomorrowHeader.textContent = 'Day After Tomorrow';
  afterTomorrowHeader.classList.add('forecastDayHeader');
  afterTomorrowDiv.appendChild(afterTomorrowHeader);

  const afterTomorrowIcon = document.createElement('img');
  afterTomorrowIcon.setAttribute('src', forecastData.dayTwo.picture);
  afterTomorrowIcon.classList.add('forecastIcon');
  afterTomorrowDiv.appendChild(afterTomorrowIcon);

  const afterTomorrowCondition = document.createElement('p');
  afterTomorrowCondition.textContent = `${forecastData.dayTwo.condition}`;
  afterTomorrowCondition.classList.add('forecastCondition');
  afterTomorrowDiv.appendChild(afterTomorrowCondition);

  const afterTomorrowTemp = document.createElement('p');
  afterTomorrowTemp.textContent = `${forecastData.dayTwo.avTemp} °C`;
  afterTomorrowTemp.classList.add('forecastTemp');
  afterTomorrowDiv.appendChild(afterTomorrowTemp);

  const rainChanceAfterTomorrow = document.createElement('p');
  rainChanceAfterTomorrow.textContent = `${forecastData.dayTwo.rainChance}%`;
  rainChanceAfterTomorrow.classList.add('forecastRainChance');
  afterTomorrowDiv.appendChild(rainChanceAfterTomorrow);

  return searchIcon;
}

async function apiGetData(city) {
  if (city === undefined) return;
  const urlToFetch = `${weatherURL}${APIkey}&q=${city}&aqi=no`;
  const response = await fetch(urlToFetch);
  const data = await response.json();
  // const currentData = data.location.name;
  const currentData = {
    location: data.location.name,
    condition: data.current.condition.text,
    currentTemp: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    humidity: data.current.humidity,
    precipitation: data.current.precip_mm,
    lastUpdated: data.current.last_updated,
    windSpeed: data.current.wind_kph,
  };
  return currentData;
}

async function apiGetForecast(city) {
  const urlToFetch = `${forecastURL}${APIkey}&q=${city}&days=4&aqi=no&alerts=no`;
  const response = await fetch(urlToFetch);
  const data = await response.json();
  const forecastData = {
    dayOne: {
      date: data.forecast.forecastday[1].date,
      avTemp: data.forecast.forecastday[1].day.avgtemp_c,
      rainChance: data.forecast.forecastday[1].day.daily_chance_of_rain,
      condition: data.forecast.forecastday[1].day.condition.text,
      picture: data.forecast.forecastday[1].day.condition.icon,
    },
    dayTwo: {
      date: data.forecast.forecastday[2].date,
      avTemp: data.forecast.forecastday[2].day.avgtemp_c,
      rainChance: data.forecast.forecastday[2].day.daily_chance_of_rain,
      condition: data.forecast.forecastday[2].day.condition.text,
      picture: data.forecast.forecastday[2].day.condition.icon,
    },
  };
  return forecastData;
}

async function insertApiData(city) {
  const currentdater = await apiGetData(city);
  const forecastdater = await apiGetForecast(city);
  createCard(currentdater, forecastdater);
}

async function refreshData(city) {
  const currentData = await apiGetData(city);
  const forecastData = await apiGetForecast(city);

  document.querySelector('.location').textContent = currentData.location;
  document.querySelector('.currentTemp').textContent = `${currentData.currentTemp}°C`;
  document.querySelector('.extraInfo>*:first-child').textContent = `Feels \r\n${currentData.feelsLike}°C`;
  document.querySelector('.extraInfo>*:nth-child(2)').textContent = `Humidity \r\n${currentData.humidity}%`;
  document.querySelector('.extraInfo>*:nth-child(3)').textContent = `Precipitation \r\n${currentData.precipitation}mm`;

  document.querySelector('.forecastDayOne>.forecastIcon').setAttribute('src', forecastData.dayOne.picture);
  document.querySelector('.forecastDayOne>.forecastCondition').textContent = forecastData.dayOne.condition;
  document.querySelector('.forecastDayOne>.forecastTemp').textContent = forecastData.dayOne.avTemp;
  document.querySelector('.forecastDayOne>.forecastRainChance').textContent = `${forecastData.dayOne.rainChance}%`;

  document.querySelector('.forecastDayTwo>.forecastIcon').setAttribute('src', forecastData.dayTwo.picture);
  document.querySelector('.forecastDayTwo>.forecastCondition').textContent = forecastData.dayTwo.condition;
  document.querySelector('.forecastDayTwo>.forecastTemp').textContent = `${forecastData.dayTwo.avTemp}°C`;
  document.querySelector('.forecastDayTwo>.forecastRainChance').textContent = `${forecastData.dayTwo.rainChance}%`;
}


/***/ }),

/***/ "./src/DarumadropOne-Regular.ttf":
/*!***************************************!*\
  !*** ./src/DarumadropOne-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecbd91fa3352ff011bf1.ttf";

/***/ }),

/***/ "./src/search.svg":
/*!************************!*\
  !*** ./src/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04a90d8779e84aa2122a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageLoader.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwyRUFBMkUsMkJBQTJCO0FBQ3RHLGlGQUFpRiwrQkFBK0I7QUFDaEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS1wcmFjdGljZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGktcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLXByYWN0aWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBpLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGktcHJhY3RpY2UvLi9zcmMvcGFnZUxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9EYXJ1bWFkcm9wT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0ZmYnKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XFxufVxcblxcbi5zZWFyY2hBbmRDYXJkIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zZWFyY2hCYXJEaXYgeyBcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDIwMG1zO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwyNTUsIDAuNSk7XFxuICAvKiBib3JkZXI6c29saWQgMXB4IHJnYmEoMjU1LCAyNTUsMjU1LCApOyAqL1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG4gIGFuaW1hdGlvbjogYW5pbWF0b3IgMXMgZWFzZS1pbi1vdXQgO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdG9yIHtcXG4gIGZyb20ge1xcbm9wYWNpdHk6MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KVxcbn1cXG5cXG50byB7XFxub3BhY2l0eTogMTAwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KVxcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkdXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweClcXG5cXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcXG5cXG4gIH1cXG59XFxuXFxuXFxuXFxuXFxuLnNlYXJjaEJhckRpdjpob3ZlciB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwyNTUsIDEpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOjEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VhcmNoSWNvbmVrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaWtvbmE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi53ZWF0aGVyQ2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZHVwIDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4ud2VhdGhlckNhcmQgPiAqe1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIHBhZGRpbmc6IDI1cHggMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICBmb250LXNpemU6MjVweCA7XFxufVxcblxcbi5jdXJyZW50VGVtcCB7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206MjBweCA7XFxuXFxufVxcblxcbi5leHRyYUluZm8ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNCk7XFxuXFxufVxcblxcbi5leHRyYUluZm8+ICoge1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5leHRyYUluZm8+ICo6bm90KDpsYXN0LWNoaWxkKXtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xcbn1cXG5cXG4uZm9yZWNhc3RTZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDQ1JTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLmZvcmVjYXN0RGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMjBweCAwLjVmciAwLjVmcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LDI1NSwgMC4yKTtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG59XFxuXFxuLmZvcmVjYXN0RGF5ID4gKiB7XFxuLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0RGF5SGVhZGVyIHtcXG5wYWRkaW5nLXRvcDogNXB4O1xcbmJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LDI1NSwgMC4yKTtcXG59XFxuXFxuLmZvcmVjYXN0SWNvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3RUZW1wIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmZvcmVjYXN0UmFpbkNoYW5jZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2UgeyBcXG4gIDAlIHsgXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAyNSUgeyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgfVxcbiAgNTAlIHsgXFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDc1JSB7IFxcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG4gIH1cXG4gIDEwMCUgeyBcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcblxcbi5zaGFrZSB7XFxuICBhbmltYXRpb246IHNoYWtlIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHFFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1DQUFtQzs7QUFFckM7O0FBRUE7RUFDRTtBQUNGLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYOztFQUVGO0VBQ0E7SUFDRSxhQUFhO0lBQ2I7O0VBRUY7QUFDRjs7Ozs7QUFLQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7O0FBRXJDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDZDQUE2Qzs7QUFFL0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3Qix5QkFBeUI7O0FBRTNCOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdEQUFnRDtBQUNoRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICBzcmM6IHVybCgnLi9EYXJ1bWFkcm9wT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0ZmYnKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XFxufVxcblxcbi5zZWFyY2hBbmRDYXJkIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zZWFyY2hCYXJEaXYgeyBcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDIwMG1zO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwyNTUsIDAuNSk7XFxuICAvKiBib3JkZXI6c29saWQgMXB4IHJnYmEoMjU1LCAyNTUsMjU1LCApOyAqL1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG4gIGFuaW1hdGlvbjogYW5pbWF0b3IgMXMgZWFzZS1pbi1vdXQgO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdG9yIHtcXG4gIGZyb20ge1xcbm9wYWNpdHk6MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KVxcbn1cXG5cXG50byB7XFxub3BhY2l0eTogMTAwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KVxcbn1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkdXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweClcXG5cXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcXG5cXG4gIH1cXG59XFxuXFxuXFxuXFxuXFxuLnNlYXJjaEJhckRpdjpob3ZlciB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwyNTUsIDEpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOjEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VhcmNoSWNvbmVrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaWtvbmE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi53ZWF0aGVyQ2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDcwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGFuaW1hdGlvbjogc2xpZHVwIDIwMG1zIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5cXG4ud2VhdGhlckNhcmQgPiAqe1xcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIHBhZGRpbmc6IDI1cHggMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICBmb250LXNpemU6MjVweCA7XFxufVxcblxcbi5jdXJyZW50VGVtcCB7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uY29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206MjBweCA7XFxuXFxufVxcblxcbi5leHRyYUluZm8ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNCk7XFxuXFxufVxcblxcbi5leHRyYUluZm8+ICoge1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5leHRyYUluZm8+ICo6bm90KDpsYXN0LWNoaWxkKXtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xcbn1cXG5cXG4uZm9yZWNhc3RTZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDQ1JTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLmZvcmVjYXN0RGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAxZnIgMjBweCAwLjVmciAwLjVmcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LDI1NSwgMC4yKTtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG59XFxuXFxuLmZvcmVjYXN0RGF5ID4gKiB7XFxuLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0RGF5SGVhZGVyIHtcXG5wYWRkaW5nLXRvcDogNXB4O1xcbmJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LDI1NSwgMC4yKTtcXG59XFxuXFxuLmZvcmVjYXN0SWNvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3RUZW1wIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmZvcmVjYXN0UmFpbkNoYW5jZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2UgeyBcXG4gIDAlIHsgXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAyNSUgeyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgfVxcbiAgNTAlIHsgXFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDc1JSB7IFxcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG4gIH1cXG4gIDEwMCUgeyBcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcblxcbi5zaGFrZSB7XFxuICBhbmltYXRpb246IHNoYWtlIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG15SWNvbiBmcm9tICcuL3NlYXJjaC5zdmcnO1xuXG5jb25zdCB3ZWF0aGVyVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0nO1xuY29uc3QgZm9yZWNhc3RVUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0nO1xuY29uc3QgQVBJa2V5ID0gJzE2M2M2N2E2ZDgyYjRjZWE5MzAyMTU5MzUyMzIyMDQnO1xuXG5jb25zdCBtYWluU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuY29uc3Qgc2VhcmNoQW5kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoQW5kQ2FyZC5jbGFzc0xpc3QuYWRkKCdzZWFyY2hBbmRDYXJkJyk7XG5tYWluU2VsZWN0b3IuYXBwZW5kQ2hpbGQoc2VhcmNoQW5kQ2FyZCk7XG5cbmNvbnN0IHNlYXJjaEJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJhckRpdicpO1xuc2VhcmNoQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaEJhckRpdlRyYW5zaXRpb24nKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5zZWFyY2hCYXJEaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dC5jbGFzc0xpc3QuYWRkKCdjaXR5SW5wdXQnKTtcbmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBQbGFjZScpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5zZWFyY2hBbmRDYXJkLmFwcGVuZENoaWxkKHNlYXJjaEJhckRpdik7XG5cbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnNlYXJjaEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBteUljb24pO1xuc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2hJY29uZWsnKTtcbnNlYXJjaEJhckRpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbmNvbnN0IGlucHV0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eUlucHV0Jyk7XG5cbmNvbnN0IHNlYXJjaEljb25TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hJY29uZWsnKTtcblxuc2VhcmNoSWNvblNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJDYXJkJykpIHtcbiAgICBhd2FpdCByZWZyZXNoRGF0YShpbnB1dFNlbGVjdG9yLnZhbHVlKTtcbiAgICBzaGFrZUNhcmQoKTtcbiAgfSBlbHNlIHtcbiAgICBpbnNlcnRBcGlEYXRhKGlucHV0U2VsZWN0b3IudmFsdWUpO1xuICB9XG4gIGlucHV0U2VsZWN0b3IudmFsdWUgPSAnJztcbn0pO1xuXG5mdW5jdGlvbiBzaGFrZUNhcmQoKSB7XG4gIGNvbnNvbGUubG9nKCdzaGFrZXInKTtcbiAgY29uc3Qgd2VhdGhlckNhcmRTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyQ2FyZCcpO1xuICBjb25zb2xlLmxvZygnc2hha2VlMXInKTtcbiAgd2VhdGhlckNhcmRTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2FuaW1hdGlvbjogc2hha2UgMjAwbXMgZWFzZS1pbi1vdXQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2VhdGhlckNhcmRTZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2FuaW1hdGlvbjogbm9uZScpO1xuICB9LCAyMDAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChjdXJyZW50RGF0YSwgZm9yZWNhc3REYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJDYXJkJyk7XG4gIHNlYXJjaEFuZENhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmQpO1xuXG4gIC8vIExvY2F0aW9uIEhlYWRlclxuICBjb25zdCB3ZWF0aGVyQ2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlckNhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5sb2NhdGlvbjtcbiAgd2VhdGhlckNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmRIZWFkZXIpO1xuXG4gIC8vIEN1cnJlbnQgVGVtcGVyYXR1cmVcbiAgY29uc3Qgd2VhdGhlckNhcmRDdXJyVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2VhdGhlckNhcmRDdXJyVGVtcC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGVtcCcpO1xuICB3ZWF0aGVyQ2FyZEN1cnJUZW1wLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGEuY3VycmVudFRlbXB9wrBDYDtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlckNhcmRDdXJyVGVtcCk7XG5cbiAgLy8gQ29uZGl0aW9uXG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gY3VycmVudERhdGEuY29uZGl0aW9uO1xuICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uJyk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgLy8gMyBBZGRpdGlvbmFsIEluZm8gRGl2XG5cbiAgY29uc3QgZXh0cmFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4dHJhSW5mby5jbGFzc0xpc3QuYWRkKCdleHRyYUluZm8nKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQoZXh0cmFJbmZvKTtcblxuICBjb25zdCBmZWVsc0xpa2VTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZlZWxzTGlrZVNlY3Rpb24udGV4dENvbnRlbnQgPSBgRmVlbHNcXHJcXG4ke2N1cnJlbnREYXRhLmZlZWxzTGlrZX0gwrBDYDtcbiAgZXh0cmFJbmZvLmFwcGVuZENoaWxkKGZlZWxzTGlrZVNlY3Rpb24pO1xuXG4gIGNvbnN0IGh1bWlkaXR5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eVNlY3Rpb24udGV4dENvbnRlbnQgPSBgSHVtaWRpdHlcXHJcXG4ke2N1cnJlbnREYXRhLmh1bWlkaXR5fSVgO1xuICBleHRyYUluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHlTZWN0aW9uKTtcblxuICBjb25zdCBwcmVjaXBpdGF0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmVjaXBpdGF0aW9uU2VjdGlvbi50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uIFxcclxcbiR7Y3VycmVudERhdGEucHJlY2lwaXRhdGlvbn0gbW1gO1xuICBleHRyYUluZm8uYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblNlY3Rpb24pO1xuXG4gIC8vIEZvcmVjYXN0IFNlY3Rpb25cbiAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RTZWN0aW9uJyk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcblxuICAvLyBUb21tb3Jvd1xuICBjb25zdCB0b21vcnJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b21vcnJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdERheScpO1xuICB0b21vcnJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdERheU9uZScpO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh0b21vcnJvd0Rpdik7XG5cbiAgY29uc3QgdG9tb3Jyb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvbW9ycm93SGVhZGVyLnRleHRDb250ZW50ID0gJ1RvbW9ycm93JztcbiAgdG9tb3Jyb3dIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3REYXlIZWFkZXInKTtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dIZWFkZXIpO1xuXG4gIGNvbnN0IHRvbW9ycm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB0b21vcnJvd0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBmb3JlY2FzdERhdGEuZGF5T25lLnBpY3R1cmUpO1xuICB0b21vcnJvd0ljb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RJY29uJyk7XG4gIHRvbW9ycm93RGl2LmFwcGVuZENoaWxkKHRvbW9ycm93SWNvbik7XG5cbiAgY29uc3QgdG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvbW9ycm93Q29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmRheU9uZS5jb25kaXRpb259YDtcbiAgdG9tb3Jyb3dDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RDb25kaXRpb24nKTtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dDb25kaXRpb24pO1xuXG4gIGNvbnN0IHRvbW9ycm93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9tb3Jyb3dUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmRheU9uZS5hdlRlbXB9IMKwQ2A7XG4gIHRvbW9ycm93VGVtcC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdFRlbXAnKTtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dUZW1wKTtcblxuICBjb25zdCByYWluQ2hhbmNlVG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJhaW5DaGFuY2VUb21vcnJvdy50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0RGF0YS5kYXlPbmUucmFpbkNoYW5jZX0lYDtcbiAgcmFpbkNoYW5jZVRvbW9ycm93LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0UmFpbkNoYW5jZScpO1xuICB0b21vcnJvd0Rpdi5hcHBlbmRDaGlsZChyYWluQ2hhbmNlVG9tb3Jyb3cpO1xuXG4gIC8vIEFmdGVyVG9tbW9yb3dcbiAgY29uc3QgYWZ0ZXJUb21vcnJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZnRlclRvbW9ycm93RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0RGF5Jyk7XG4gIGFmdGVyVG9tb3Jyb3dEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3REYXlUd28nKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0Rpdik7XG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFmdGVyVG9tb3Jyb3dIZWFkZXIudGV4dENvbnRlbnQgPSAnRGF5IEFmdGVyIFRvbW9ycm93JztcbiAgYWZ0ZXJUb21vcnJvd0hlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdERheUhlYWRlcicpO1xuICBhZnRlclRvbW9ycm93RGl2LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dIZWFkZXIpO1xuXG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFmdGVyVG9tb3Jyb3dJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZm9yZWNhc3REYXRhLmRheVR3by5waWN0dXJlKTtcbiAgYWZ0ZXJUb21vcnJvd0ljb24uY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3RJY29uJyk7XG4gIGFmdGVyVG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0ljb24pO1xuXG4gIGNvbnN0IGFmdGVyVG9tb3Jyb3dDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFmdGVyVG9tb3Jyb3dDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdERhdGEuZGF5VHdvLmNvbmRpdGlvbn1gO1xuICBhZnRlclRvbW9ycm93Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Q29uZGl0aW9uJyk7XG4gIGFmdGVyVG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQoYWZ0ZXJUb21vcnJvd0NvbmRpdGlvbik7XG5cbiAgY29uc3QgYWZ0ZXJUb21vcnJvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFmdGVyVG9tb3Jyb3dUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmRheVR3by5hdlRlbXB9IMKwQ2A7XG4gIGFmdGVyVG9tb3Jyb3dUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0VGVtcCcpO1xuICBhZnRlclRvbW9ycm93RGl2LmFwcGVuZENoaWxkKGFmdGVyVG9tb3Jyb3dUZW1wKTtcblxuICBjb25zdCByYWluQ2hhbmNlQWZ0ZXJUb21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmFpbkNoYW5jZUFmdGVyVG9tb3Jyb3cudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdERhdGEuZGF5VHdvLnJhaW5DaGFuY2V9JWA7XG4gIHJhaW5DaGFuY2VBZnRlclRvbW9ycm93LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0UmFpbkNoYW5jZScpO1xuICBhZnRlclRvbW9ycm93RGl2LmFwcGVuZENoaWxkKHJhaW5DaGFuY2VBZnRlclRvbW9ycm93KTtcblxuICByZXR1cm4gc2VhcmNoSWNvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBpR2V0RGF0YShjaXR5KSB7XG4gIGlmIChjaXR5ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgY29uc3QgdXJsVG9GZXRjaCA9IGAke3dlYXRoZXJVUkx9JHtBUElrZXl9JnE9JHtjaXR5fSZhcWk9bm9gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybFRvRmV0Y2gpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBjb25zdCBjdXJyZW50RGF0YSA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgY29uc3QgY3VycmVudERhdGEgPSB7XG4gICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICBjb25kaXRpb246IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICBjdXJyZW50VGVtcDogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICBmZWVsc0xpa2U6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIHByZWNpcGl0YXRpb246IGRhdGEuY3VycmVudC5wcmVjaXBfbW0sXG4gICAgbGFzdFVwZGF0ZWQ6IGRhdGEuY3VycmVudC5sYXN0X3VwZGF0ZWQsXG4gICAgd2luZFNwZWVkOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gIH07XG4gIHJldHVybiBjdXJyZW50RGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBpR2V0Rm9yZWNhc3QoY2l0eSkge1xuICBjb25zdCB1cmxUb0ZldGNoID0gYCR7Zm9yZWNhc3RVUkx9JHtBUElrZXl9JnE9JHtjaXR5fSZkYXlzPTQmYXFpPW5vJmFsZXJ0cz1ub2A7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsVG9GZXRjaCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHtcbiAgICBkYXlPbmU6IHtcbiAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZSxcbiAgICAgIGF2VGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jLFxuICAgICAgcmFpbkNoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgcGljdHVyZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgICBkYXlUd286IHtcbiAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZSxcbiAgICAgIGF2VGVtcDogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jLFxuICAgICAgcmFpbkNoYW5jZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgcGljdHVyZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QXBpRGF0YShjaXR5KSB7XG4gIGNvbnN0IGN1cnJlbnRkYXRlciA9IGF3YWl0IGFwaUdldERhdGEoY2l0eSk7XG4gIGNvbnN0IGZvcmVjYXN0ZGF0ZXIgPSBhd2FpdCBhcGlHZXRGb3JlY2FzdChjaXR5KTtcbiAgY3JlYXRlQ2FyZChjdXJyZW50ZGF0ZXIsIGZvcmVjYXN0ZGF0ZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoRGF0YShjaXR5KSB7XG4gIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgYXBpR2V0RGF0YShjaXR5KTtcbiAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgYXBpR2V0Rm9yZWNhc3QoY2l0eSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJykudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS5sb2NhdGlvbjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRUZW1wJykudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF0YS5jdXJyZW50VGVtcH3CsENgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXh0cmFJbmZvPio6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGBGZWVscyBcXHJcXG4ke2N1cnJlbnREYXRhLmZlZWxzTGlrZX3CsENgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXh0cmFJbmZvPio6bnRoLWNoaWxkKDIpJykudGV4dENvbnRlbnQgPSBgSHVtaWRpdHkgXFxyXFxuJHtjdXJyZW50RGF0YS5odW1pZGl0eX0lYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4dHJhSW5mbz4qOm50aC1jaGlsZCgzKScpLnRleHRDb250ZW50ID0gYFByZWNpcGl0YXRpb24gXFxyXFxuJHtjdXJyZW50RGF0YS5wcmVjaXBpdGF0aW9ufW1tYDtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3REYXlPbmU+LmZvcmVjYXN0SWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgZm9yZWNhc3REYXRhLmRheU9uZS5waWN0dXJlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0RGF5T25lPi5mb3JlY2FzdENvbmRpdGlvbicpLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmRheU9uZS5jb25kaXRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdERheU9uZT4uZm9yZWNhc3RUZW1wJykudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuZGF5T25lLmF2VGVtcDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0RGF5T25lPi5mb3JlY2FzdFJhaW5DaGFuY2UnKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0RGF0YS5kYXlPbmUucmFpbkNoYW5jZX0lYDtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3REYXlUd28+LmZvcmVjYXN0SWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgZm9yZWNhc3REYXRhLmRheVR3by5waWN0dXJlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0RGF5VHdvPi5mb3JlY2FzdENvbmRpdGlvbicpLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmRheVR3by5jb25kaXRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdERheVR3bz4uZm9yZWNhc3RUZW1wJykudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdERhdGEuZGF5VHdvLmF2VGVtcH3CsENgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3REYXlUd28+LmZvcmVjYXN0UmFpbkNoYW5jZScpLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3REYXRhLmRheVR3by5yYWluQ2hhbmNlfSVgO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9