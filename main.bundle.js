/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://codemonkey.games/phaser3-lr-cordova/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--7-1!./src/index.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./src/index.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"body,html{height:100%;margin:0;padding:0;background:#111;color:#eee;font:caption;filter:none;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor;image-rendering:-webkit-optimize-contrast;image-rendering:-webkit-crisp-edges;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:pixelated}canvas{width:100%;height:100%;object-fit:contain}\", \"\", {\"version\":3,\"sources\":[\"/home/daniel/code/phaser/phaser3-lr-cordova/src/index.css\"],\"names\":[],\"mappings\":\"AAAA,UAGI,YAAa,AACb,SAAU,AACV,UAAW,AACX,gBAAiB,AACjB,WAAY,AACZ,aAAc,AAGd,YAAa,AAIb,4BAA6B,AAC7B,wCAAyC,AACzC,0CAA2C,AAC3C,oCAAqC,AACrC,iCAAkC,AAClC,+BAAgC,AAChC,yBAA2B,CAC9B,AAED,OACI,WAAY,AACZ,YAAa,AACb,kBAAoB,CACvB\",\"file\":\"index.css\",\"sourcesContent\":[\"html,\\nbody {\\n    /* Layout */\\n    height: 100%;\\n    margin: 0;\\n    padding: 0;\\n    background: #111;\\n    color: #eee;\\n    font: caption;\\n\\n    /* PIXELART PROPERTIES */\\n    filter: none;\\n    image-rendering: -moz-crisp-edges;\\n    image-rendering: -webkit-crisp-edges;\\n    image-rendering: pixelated;\\n    image-rendering: crisp-edges;\\n    -ms-interpolation-mode: nearest-neighbor;\\n    image-rendering: -webkit-optimize-contrast;\\n    image-rendering: -webkit-crisp-edges;\\n    image-rendering: -moz-crisp-edges;\\n    image-rendering: -o-crisp-edges;\\n    image-rendering: pixelated;\\n}\\n\\ncanvas {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: contain;\\n}\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader??ref--7-1");

/***/ }),

/***/ "./src/assets/animus.png":
/*!*******************************!*\
  !*** ./src/assets/animus.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"952435fe3dca23598da4270d37d32956.png\";\n\n//# sourceURL=webpack:///./src/assets/animus.png?");

/***/ }),

/***/ "./src/assets/blade-hit.wav":
/*!**********************************!*\
  !*** ./src/assets/blade-hit.wav ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8b16c269cce4d8d23e0b382f868d8f1a.wav\";\n\n//# sourceURL=webpack:///./src/assets/blade-hit.wav?");

/***/ }),

/***/ "./src/assets/blade.png":
/*!******************************!*\
  !*** ./src/assets/blade.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7e770e0315240b6ef8053ba1f70a4d1c.png\";\n\n//# sourceURL=webpack:///./src/assets/blade.png?");

/***/ }),

/***/ "./src/assets/blood-puddle.png":
/*!*************************************!*\
  !*** ./src/assets/blood-puddle.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9a40827f4d75f21a51f7cd7399ef1eef.png\";\n\n//# sourceURL=webpack:///./src/assets/blood-puddle.png?");

/***/ }),

/***/ "./src/assets/blood-splat.png":
/*!************************************!*\
  !*** ./src/assets/blood-splat.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8d2044d58451729e00804cb31b062c28.png\";\n\n//# sourceURL=webpack:///./src/assets/blood-splat.png?");

/***/ }),

/***/ "./src/assets/blood.png":
/*!******************************!*\
  !*** ./src/assets/blood.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0cd82790dfd2e902076422860d936940.png\";\n\n//# sourceURL=webpack:///./src/assets/blood.png?");

/***/ }),

/***/ "./src/assets/bomb.png":
/*!*****************************!*\
  !*** ./src/assets/bomb.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7a0c75b7a49a323c492ba1b38c7ae9e2.png\";\n\n//# sourceURL=webpack:///./src/assets/bomb.png?");

/***/ }),

/***/ "./src/assets/bone.png":
/*!*****************************!*\
  !*** ./src/assets/bone.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e8caa99caa9a9908252409cf7a733319.png\";\n\n//# sourceURL=webpack:///./src/assets/bone.png?");

/***/ }),

/***/ "./src/assets/bowser-cannonball.png":
/*!******************************************!*\
  !*** ./src/assets/bowser-cannonball.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"52572f240b6be720019490b6f551f569.png\";\n\n//# sourceURL=webpack:///./src/assets/bowser-cannonball.png?");

/***/ }),

/***/ "./src/assets/bowser-copter-propeller.png":
/*!************************************************!*\
  !*** ./src/assets/bowser-copter-propeller.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3b4cef91c09d969e1c0d498fe3c8aac2.png\";\n\n//# sourceURL=webpack:///./src/assets/bowser-copter-propeller.png?");

/***/ }),

/***/ "./src/assets/bowser-copter.png":
/*!**************************************!*\
  !*** ./src/assets/bowser-copter.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"601e23f8d37c8fac9608b6d5f93f3f30.png\";\n\n//# sourceURL=webpack:///./src/assets/bowser-copter.png?");

/***/ }),

/***/ "./src/assets/bowser.png":
/*!*******************************!*\
  !*** ./src/assets/bowser.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5cc7aeb4a6d1a57e511a20d44d300087.png\";\n\n//# sourceURL=webpack:///./src/assets/bowser.png?");

/***/ }),

/***/ "./src/assets/cyrax.png":
/*!******************************!*\
  !*** ./src/assets/cyrax.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4fb25d2e9a3e370feeb5343ef4d4b03d.png\";\n\n//# sourceURL=webpack:///./src/assets/cyrax.png?");

/***/ }),

/***/ "./src/assets/explosion.json":
/*!***********************************!*\
  !*** ./src/assets/explosion.json ***!
  \***********************************/
/*! exports provided: frames, meta, default */
/***/ (function(module) {

eval("module.exports = {\"frames\":{\"cloud\":{\"frame\":{\"x\":2,\"y\":2,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"muzzleflash1\":{\"frame\":{\"x\":2,\"y\":132,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"muzzleflash2\":{\"frame\":{\"x\":2,\"y\":262,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"muzzleflash3\":{\"frame\":{\"x\":132,\"y\":2,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"muzzleflash7\":{\"frame\":{\"x\":132,\"y\":132,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"red\":{\"frame\":{\"x\":132,\"y\":262,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"smoke-puff\":{\"frame\":{\"x\":262,\"y\":2,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"smoke0\":{\"frame\":{\"x\":262,\"y\":132,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"stone\":{\"frame\":{\"x\":262,\"y\":262,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}},\"white-smoke\":{\"frame\":{\"x\":392,\"y\":2,\"w\":128,\"h\":128},\"rotated\":false,\"trimmed\":false,\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":128,\"h\":128},\"sourceSize\":{\"w\":128,\"h\":128},\"pivot\":{\"x\":0.5,\"y\":0.5}}},\"meta\":{\"app\":\"http://www.codeandweb.com/texturepacker\",\"version\":\"1.0\",\"image\":\"explosion.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":522,\"h\":392},\"scale\":\"1\",\"smartupdate\":\"$TexturePacker:SmartUpdate:b5294d5f3442ed45b0f28e9f9fdbc9cc:0e6d089002d092bf88487ee2930dd6f7:900e1fb3093a9a6ecb2b2b49071c44f7$\"}};\n\n//# sourceURL=webpack:///./src/assets/explosion.json?");

/***/ }),

/***/ "./src/assets/explosion.png":
/*!**********************************!*\
  !*** ./src/assets/explosion.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"77adb8a9aaf81f9c569bd8e6016d4c55.png\";\n\n//# sourceURL=webpack:///./src/assets/explosion.png?");

/***/ }),

/***/ "./src/assets/liu-kang-idle.png":
/*!**************************************!*\
  !*** ./src/assets/liu-kang-idle.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f97b6c476a40881131ee6fe1023dec5a.png\";\n\n//# sourceURL=webpack:///./src/assets/liu-kang-idle.png?");

/***/ }),

/***/ "./src/assets/liu-kang.png":
/*!*********************************!*\
  !*** ./src/assets/liu-kang.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c45a2e8f239f20af325081b6a36e7fa8.png\";\n\n//# sourceURL=webpack:///./src/assets/liu-kang.png?");

/***/ }),

/***/ "./src/assets/mk3-00500-explosion.wav":
/*!********************************************!*\
  !*** ./src/assets/mk3-00500-explosion.wav ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0ee6fba726d8a6002d98a756d3527db1.wav\";\n\n//# sourceURL=webpack:///./src/assets/mk3-00500-explosion.wav?");

/***/ }),

/***/ "./src/assets/mk3-00695-bomb-eject.wav":
/*!*********************************************!*\
  !*** ./src/assets/mk3-00695-bomb-eject.wav ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"51aa3b66942dd4a9f6d0a9fb5aecfd85.wav\";\n\n//# sourceURL=webpack:///./src/assets/mk3-00695-bomb-eject.wav?");

/***/ }),

/***/ "./src/assets/mk3-00805-bomb-drop.wav":
/*!********************************************!*\
  !*** ./src/assets/mk3-00805-bomb-drop.wav ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4f738d95d7a9ea84188af4799f76c3a2.wav\";\n\n//# sourceURL=webpack:///./src/assets/mk3-00805-bomb-drop.wav?");

/***/ }),

/***/ "./src/assets/monkey-headless.png":
/*!****************************************!*\
  !*** ./src/assets/monkey-headless.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"75f071c5089f6422476a8909d060381f.png\";\n\n//# sourceURL=webpack:///./src/assets/monkey-headless.png?");

/***/ }),

/***/ "./src/assets/monkey.png":
/*!*******************************!*\
  !*** ./src/assets/monkey.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a280c2901fad8e76e588176ec52b2f9a.png\";\n\n//# sourceURL=webpack:///./src/assets/monkey.png?");

/***/ }),

/***/ "./src/assets/muscle.png":
/*!*******************************!*\
  !*** ./src/assets/muscle.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6911059fff3e9f960227e9d969a11cc6.png\";\n\n//# sourceURL=webpack:///./src/assets/muscle.png?");

/***/ }),

/***/ "./src/assets/parabomb.png":
/*!*********************************!*\
  !*** ./src/assets/parabomb.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6c3b4e93db2db5b3658a3ba779fad1cb.png\";\n\n//# sourceURL=webpack:///./src/assets/parabomb.png?");

/***/ }),

/***/ "./src/assets/rainbow-cloud.png":
/*!**************************************!*\
  !*** ./src/assets/rainbow-cloud.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2a078d505267a71515d736aed3fa0288.png\";\n\n//# sourceURL=webpack:///./src/assets/rainbow-cloud.png?");

/***/ }),

/***/ "./src/assets/rainbow-super.png":
/*!**************************************!*\
  !*** ./src/assets/rainbow-super.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a39f8dbad99237efb17d212b303f9493.png\";\n\n//# sourceURL=webpack:///./src/assets/rainbow-super.png?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst SCALE = 1;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  WIDTH: 384,\n  //window.innerWidth,\n  HEIGHT: 216,\n  //window.innerHeight,\n  SCALE: SCALE\n});\n/*\nWidth\tHeight\tStandard\tDivisible by 8\n16\t9\t\t\n32\t18\t\t\n48\t27\t\t\n64\t36\t\t\n80\t45\t\t\n96\t54\t\t\n112\t63\t\t\n128\t72\t\tYes\n144\t81\t\t\n160\t90\t\t\n176\t99\t\t\n192\t108\t\t\n208\t117\t\t\n224\t126\t\t\n240\t135\t\t\n256\t144\t\tYes\n272\t153\t\t\n288\t162\t\t\n304\t171\t\t\n320\t180\t\t\n336\t189\t\t\n352\t198\t\t\n368\t207\t\t\n384\t216\t\tYes\n400\t225\t\t\n416\t234\t\t\n432\t243\t\t\n448\t252\t\t\n464\t261\t\t\n480\t270\t\t\n496\t279\t\t\n512\t288\t\tYes\n528\t297\t\t\n544\t306\t\t\n560\t315\t\t\n576\t324\t\t\n592\t333\t\t\n608\t342\t\t\n624\t351\t\t\n640\t360\t\tYes\n656\t369\t\t\n672\t378\t\t\n688\t387\t\t\n704\t396\t\t\n720\t405\t\t\n736\t414\t\t\n752\t423\t\t\n768\t432\t\tYes\n784\t441\t\t\n800\t450\t\t\n816\t459\t\t\n832\t468\t\t\n848\t477\t\t\n864\t486\t\t\n880\t495\t\t\n896\t504\t\tYes\n912\t513\t\t\n928\t522\t\t\n944\t531\t\t\n960\t540\t\t\n976\t549\t\t\n992\t558\t\t\n1008\t567\t\t\n1024\t576\t\tYes\n1040\t585\t\t\n1056\t594\t\t\n1072\t603\t\t\n1088\t612\t\t\n1104\t621\t\t\n1120\t630\t\t\n1136\t639\t\t\n1152\t648\t\tYes\n1168\t657\t\t\n1184\t666\t\t\n1200\t675\t\t\n1216\t684\t\t\n1232\t693\t\t\n1248\t702\t\t\n1264\t711\t\t\n1280\t720\t720p HD\tYes\n*/\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/font-loader.js":
/*!****************************!*\
  !*** ./src/font-loader.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.WebFontConfig = {\n  google: {\n    families: ['Press Start 2P', 'Orbitron', 'Bangers']\n  }\n};\n\n(function () {\n  var wf = document.createElement('script');\n  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';\n  wf.type = 'text/javascript';\n  wf.async = 'true';\n  var s = document.getElementsByTagName('script')[0];\n  s.parentNode.insertBefore(wf, s);\n})();\n\n//# sourceURL=webpack:///./src/font-loader.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader??ref--7-1!./index.css */ \"./node_modules/css-loader/index.js??ref--7-1!./src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _font_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-loader */ \"./src/font-loader.js\");\n/* harmony import */ var _font_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_font_loader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _scenes_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/game */ \"./src/scenes/game.js\");\n/* harmony import */ var _scenes_game2_parabomb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/game2-parabomb */ \"./src/scenes/game2-parabomb.js\");\n/* harmony import */ var _scenes_game3_animus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/game3-animus */ \"./src/scenes/game3-animus.js\");\n/* harmony import */ var _scenes_game4_liu_kang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/game4-liu-kang */ \"./src/scenes/game4-liu-kang.js\");\n/* harmony import */ var _scenes_game4_rainbow_dash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scenes/game4-rainbow-dash */ \"./src/scenes/game4-rainbow-dash.js\");\n/* harmony import */ var _scenes_game6_bowser_and_peach__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scenes/game6-bowser-and-peach */ \"./src/scenes/game6-bowser-and-peach.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.Phaser = phaser__WEBPACK_IMPORTED_MODULE_2___default.a;\nconst config = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.AUTO,\n  width: _config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].WIDTH,\n  height: _config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HEIGHT,\n  physics: {\n    default: 'arcade'\n  },\n  scene: [// GameScene\n  // Parabomb\n  _scenes_game3_animus__WEBPACK_IMPORTED_MODULE_6__[\"default\"] // LiuKang\n  // RainbowDash\n  // BowserAndPeach\n  ],\n  pixelArt: true,\n  antialias: false\n};\nconst game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(config);\nwindow.game = game;\n\nfunction initialize(game) {\n  function resize() {\n    let w = window.innerWidth;\n    let h = window.innerHeight;\n    let scale = Math.min(w / _config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].WIDTH, h / _config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].HEIGHT);\n    game.canvas.setAttribute('style', ` -webkit-transform: scale3d(${scale});\n      transform: scale(${scale});\n      transform-origin: top left;`);\n    let width = w / scale;\n    let height = h / scale;\n    game.resize(width, height);\n    game.scene.scenes.forEach(function (scene) {\n      scene.cameras.main.setViewport(0, 0, width, height);\n    });\n  }\n\n  window.addEventListener('resize', resize);\n  if (game.isBooted) resize();else game.events.once('boot', resize);\n}\n\ninitialize(game);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scenes/game.js":
/*!****************************!*\
  !*** ./src/scenes/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_bomb_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bomb.png */ \"./src/assets/bomb.png\");\n/* harmony import */ var _assets_bomb_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_bomb_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sprites_bomb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/bomb */ \"./src/sprites/bomb.js\");\n/* harmony import */ var _assets_mk3_00805_bomb_drop_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/mk3-00805-bomb-drop.wav */ \"./src/assets/mk3-00805-bomb-drop.wav\");\n/* harmony import */ var _assets_mk3_00805_bomb_drop_wav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_mk3_00805_bomb_drop_wav__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_mk3_00695_bomb_eject_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/mk3-00695-bomb-eject.wav */ \"./src/assets/mk3-00695-bomb-eject.wav\");\n/* harmony import */ var _assets_mk3_00695_bomb_eject_wav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_mk3_00695_bomb_eject_wav__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/mk3-00500-explosion.wav */ \"./src/assets/mk3-00500-explosion.wav\");\n/* harmony import */ var _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_cyrax_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/cyrax.png */ \"./src/assets/cyrax.png\");\n/* harmony import */ var _assets_cyrax_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_cyrax_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sprites_cyrax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/cyrax */ \"./src/sprites/cyrax.js\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.audio('bombDrop', _assets_mk3_00805_bomb_drop_wav__WEBPACK_IMPORTED_MODULE_5___default.a);\n    this.load.audio('bombEject', _assets_mk3_00695_bomb_eject_wav__WEBPACK_IMPORTED_MODULE_6___default.a);\n    this.load.audio('bombExplosion', _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_7___default.a);\n    this.load.spritesheet('bomb', _assets_bomb_png__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      frameWidth: 10,\n      frameHeight: 11,\n      endFrame: 5\n    });\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_11___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_12__);\n    this.load.spritesheet('cyrax', _assets_cyrax_png__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      frameWidth: 35,\n      frameHeight: 100,\n      endFrame: 3\n    });\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_13___default.a);\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_15___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2;\n    this.cyrax = new _sprites_cyrax__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n      scene: this,\n      x: 0,\n      y: this.game.config.height\n    });\n    this.bomb = new _sprites_bomb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      scene: this,\n      x: this.cyrax.x + (this.cyrax.width - 3),\n      y: this.cyrax.y - this.cyrax.height / 2 - 20\n    });\n  }\n\n  update() {\n    this.physics.overlap(this.bomb, this.monkey, this.hitEnemy, this.checkBulletVsEnemy, this);\n    this.bomb.update();\n  }\n\n  render() {}\n\n  checkBulletVsEnemy(bullet, enemy) {\n    return bullet.active && enemy.active;\n  }\n\n  hitEnemy(bullet, enemy) {\n    let isDead = enemy.damage(bullet);\n    if (isDead) this.cyrax.victoryDance();\n    bullet.destroy();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game.js?");

/***/ }),

/***/ "./src/scenes/game2-parabomb.js":
/*!**************************************!*\
  !*** ./src/scenes/game2-parabomb.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mk3-00500-explosion.wav */ \"./src/assets/mk3-00500-explosion.wav\");\n/* harmony import */ var _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_parabomb_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/parabomb.png */ \"./src/assets/parabomb.png\");\n/* harmony import */ var _assets_parabomb_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_parabomb_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sprites_parabomb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/parabomb */ \"./src/sprites/parabomb.js\");\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.audio('bombExplosion', _assets_mk3_00500_explosion_wav__WEBPACK_IMPORTED_MODULE_3___default.a);\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__);\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7___default.a);\n    this.load.spritesheet('parabomb', _assets_parabomb_png__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      frameWidth: 34,\n      frameHeight: 42,\n      endFrame: 18\n    });\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2;\n    this.parabomb = new _sprites_parabomb__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      scene: this,\n      x: 53,\n      y: 58\n    });\n  }\n\n  update() {\n    this.physics.overlap(this.parabomb, this.monkey, this.hitEnemy, this.checkBulletVsEnemy, this);\n    this.parabomb.update();\n  }\n\n  render() {}\n\n  checkBulletVsEnemy(bullet, enemy) {\n    return bullet.active && enemy.active;\n  }\n\n  hitEnemy(bullet, enemy) {\n    enemy.active = false;\n    bullet.destroy(bullet, enemy);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game2-parabomb.js?");

/***/ }),

/***/ "./src/scenes/game3-animus.js":
/*!************************************!*\
  !*** ./src/scenes/game3-animus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blade.png */ \"./src/assets/blade.png\");\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blade_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_blade_hit_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/blade-hit.wav */ \"./src/assets/blade-hit.wav\");\n/* harmony import */ var _assets_blade_hit_wav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_blade_hit_wav__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_blood_puddle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/blood-puddle.png */ \"./src/assets/blood-puddle.png\");\n/* harmony import */ var _assets_blood_puddle_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_puddle_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_blood_splat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/blood-splat.png */ \"./src/assets/blood-splat.png\");\n/* harmony import */ var _assets_blood_splat_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_splat_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_animus_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/animus.png */ \"./src/assets/animus.png\");\n/* harmony import */ var _assets_animus_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_animus_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sprites_animus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sprites/animus */ \"./src/sprites/animus.js\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.audio('bladeHitSound', _assets_blade_hit_wav__WEBPACK_IMPORTED_MODULE_3___default.a);\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_10___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_11__);\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_12___default.a);\n    this.load.spritesheet('animus', _assets_animus_png__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      frameWidth: 110,\n      frameHeight: 155,\n      endFrame: 15\n    });\n    this.load.spritesheet('blade', _assets_blade_png__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      frameWidth: 62,\n      frameHeight: 208,\n      endFrame: 1\n    });\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bloodPuddle', _assets_blood_puddle_png__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      frameWidth: 185,\n      frameHeight: 187,\n      endFrame: 4\n    });\n    this.load.spritesheet('bloodSplat', _assets_blood_splat_png__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      frameWidth: 158,\n      frameHeight: 176,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_13__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height - 70\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2;\n    this.animus = new _sprites_animus__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n      scene: this,\n      x: this.game.config.width - 55,\n      y: this.game.config.height - 77,\n      victim: this.monkey\n    });\n  }\n\n  update() {\n    this.animus.update();\n  }\n\n  render() {}\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game3-animus.js?");

/***/ }),

/***/ "./src/scenes/game4-liu-kang.js":
/*!**************************************!*\
  !*** ./src/scenes/game4-liu-kang.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blade.png */ \"./src/assets/blade.png\");\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blade_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_headless_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/monkey-headless.png */ \"./src/assets/monkey-headless.png\");\n/* harmony import */ var _assets_monkey_headless_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_headless_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_liu_kang_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/liu-kang.png */ \"./src/assets/liu-kang.png\");\n/* harmony import */ var _assets_liu_kang_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_liu_kang_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_liu_kang_idle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/liu-kang-idle.png */ \"./src/assets/liu-kang-idle.png\");\n/* harmony import */ var _assets_liu_kang_idle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_liu_kang_idle_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__);\n    this.load.image('headlessMonkey', _assets_monkey_headless_png__WEBPACK_IMPORTED_MODULE_7___default.a);\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10___default.a);\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('liuKang', _assets_liu_kang_png__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      frameWidth: 129,\n      frameHeight: 169,\n      endFrame: 12\n    });\n    this.load.spritesheet('liuKangIdle', _assets_liu_kang_idle_png__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      frameWidth: 42,\n      frameHeight: 100,\n      endFrame: 5\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2; // chillin\n\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('liuKangIdle', {\n        start: 0,\n        end: 5,\n        first: 0\n      }),\n      hideOnComplete: true,\n      key: 'chillin',\n      repeat: -1\n    }); // dragon Animation\n\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('liuKang', {\n        start: 0,\n        end: 9,\n        first: 0\n      }),\n      key: 'dragonMorph'\n    }); // dragon Animation\n\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('liuKang', {\n        start: 10,\n        end: 12,\n        first: 10\n      }),\n      key: 'dragonBite'\n    });\n    let liuKang = this.add.sprite(this.game.config.width - 40, this.game.config.height, 'liuKang', 0);\n    liuKang.setOrigin(1, 1);\n    liuKang.on('animationcomplete', (anim, frame) => liuKang.emit('animationcomplete_' + anim.key, anim, frame));\n    liuKang.play('dragonMorph');\n    liuKang.once('animationcomplete_dragonMorph', anim => {\n      this.time.delayedCall(1000, () => {\n        liuKang.play('dragonBite');\n      });\n    });\n    liuKang.on('animationcomplete_dragonBite', () => {\n      this.monkey.setTexture('headlessMonkey');\n      this.monkey.bloodAnimation();\n      this.time.delayedCall(750, () => {\n        this.monkey.destroy();\n      });\n      liuKang.once('animationcomplete_dragonMorph', anim => {\n        liuKang.alpha = 0;\n        let liuKangIdle = this.add.sprite(liuKang.getBottomLeft().x, liuKang.getBottomLeft().y, 'liuKangIdle', 0);\n        liuKangIdle.setOrigin(0, 1);\n        liuKangIdle.play('chillin');\n      });\n      this.time.delayedCall(500, () => {\n        liuKang.anims.playReverse('dragonMorph');\n      });\n    });\n  }\n\n  update() {}\n\n  render() {}\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game4-liu-kang.js?");

/***/ }),

/***/ "./src/scenes/game4-rainbow-dash.js":
/*!******************************************!*\
  !*** ./src/scenes/game4-rainbow-dash.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blade.png */ \"./src/assets/blade.png\");\n/* harmony import */ var _assets_blade_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blade_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_rainbow_cloud_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/rainbow-cloud.png */ \"./src/assets/rainbow-cloud.png\");\n/* harmony import */ var _assets_rainbow_cloud_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_rainbow_cloud_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_rainbow_super_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/rainbow-super.png */ \"./src/assets/rainbow-super.png\");\n/* harmony import */ var _assets_rainbow_super_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_rainbow_super_png__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n // import liuKang from '../assets/liu-kang.png';\n// import liuKangIdle from '../assets/liu-kang-idle.png';\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_6__);\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_7___default.a);\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('rainbowDash', _assets_rainbow_super_png__WEBPACK_IMPORTED_MODULE_11___default.a, {\n      frameWidth: 69,\n      frameHeight: 75,\n      endFrame: 13\n    });\n    this.load.spritesheet('rainbowCloud', _assets_rainbow_cloud_png__WEBPACK_IMPORTED_MODULE_10___default.a, {\n      frameWidth: 39,\n      frameHeight: 40,\n      endFrame: 14\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_9___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2; // loop 11-14 (10-13)\n\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('rainbowDash', {\n        start: 0,\n        end: 9,\n        first: 0\n      }),\n      key: 'aboutToAttack'\n    });\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('rainbowDash', {\n        start: 10,\n        end: 13,\n        first: 10\n      }),\n      key: 'attack',\n      repeat: -1\n    });\n    this.anims.create({\n      frameRate: 12,\n      frames: this.anims.generateFrameNumbers('rainbowDash', {\n        start: 0,\n        end: 0,\n        first: 0\n      }),\n      key: 'chill'\n    });\n    this.anims.create({\n      frameRate: 24,\n      frames: this.anims.generateFrameNumbers('rainbowCloud', {\n        start: 0,\n        end: 14,\n        first: 0\n      }),\n      key: 'rainbowAttack',\n      repeat: 5\n    });\n    let rainbowDash = this.add.sprite(this.game.config.width / 2, this.game.config.height - 37, 'rainbowDash', 0);\n    rainbowDash.on('animationcomplete', (anim, frame) => rainbowDash.emit('animationcomplete_' + anim.key, anim, frame));\n    rainbowDash.on('animationcomplete_aboutToAttack', anim => {\n      let rainbowCloud = this.add.sprite(this.monkey.x, this.monkey.body.top - 20 + 5, 'rainbowCloud', 0);\n      rainbowCloud.play('rainbowAttack');\n      rainbowCloud.on('animationcomplete', (anim, frame) => rainbowCloud.emit('animationcomplete_' + anim.key, anim, frame));\n      rainbowDash.play('attack');\n      rainbowCloud.on('animationcomplete_rainbowAttack', anim => {\n        rainbowCloud.destroy();\n        rainbowDash.play('chill');\n        this.monkey.destroy();\n      });\n      this.rainbowCloud = rainbowCloud;\n    });\n    rainbowDash.play('aboutToAttack');\n  }\n\n  update() {\n    // cloud lightning\n    if (!this.rainbowCloud) return;\n    let lightning = [0, 1, 3, 4, 9, 10];\n\n    if (lightning.includes(this.rainbowCloud.frame.name)) {\n      let color = phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Math.RND.pick([0xe0332c, 0xfdf768, 0x0078c0]);\n      this.monkey.setTint(color);\n      this.cameras.main.setBackgroundColor(color);\n    } else {\n      this.monkey.clearTint();\n      this.cameras.main.setBackgroundColor(0x000000);\n    }\n  }\n\n  render() {}\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game4-rainbow-dash.js?");

/***/ }),

/***/ "./src/scenes/game6-bowser-and-peach.js":
/*!**********************************************!*\
  !*** ./src/scenes/game6-bowser-and-peach.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/blood.png */ \"./src/assets/blood.png\");\n/* harmony import */ var _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blood_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bone.png */ \"./src/assets/bone.png\");\n/* harmony import */ var _assets_bone_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_bone_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_bowser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bowser.png */ \"./src/assets/bowser.png\");\n/* harmony import */ var _assets_bowser_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_bowser_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_bowser_cannonball_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/bowser-cannonball.png */ \"./src/assets/bowser-cannonball.png\");\n/* harmony import */ var _assets_bowser_cannonball_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_bowser_cannonball_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_bowser_copter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/bowser-copter.png */ \"./src/assets/bowser-copter.png\");\n/* harmony import */ var _assets_bowser_copter_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_bowser_copter_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_bowser_copter_propeller_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/bowser-copter-propeller.png */ \"./src/assets/bowser-copter-propeller.png\");\n/* harmony import */ var _assets_bowser_copter_propeller_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_bowser_copter_propeller_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/explosion.png */ \"./src/assets/explosion.png\");\n/* harmony import */ var _assets_explosion_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_explosion_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_explosion_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\");\nvar _assets_explosion_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/explosion.json */ \"./src/assets/explosion.json\", 1);\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/monkey.png */ \"./src/assets/monkey.png\");\n/* harmony import */ var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_monkey_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sprites_monkey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sprites/monkey */ \"./src/sprites/monkey.js\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/muscle.png */ \"./src/assets/muscle.png\");\n/* harmony import */ var _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_muscle_png__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Scene {\n  constructor() {\n    super({\n      key: 'Game'\n    });\n  }\n\n  preload() {\n    this.load.image('bowserCopter', _assets_bowser_copter_png__WEBPACK_IMPORTED_MODULE_6___default.a);\n    this.load.atlas('explosion', _assets_explosion_png__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_explosion_json__WEBPACK_IMPORTED_MODULE_9__);\n    this.load.image('monkey', _assets_monkey_png__WEBPACK_IMPORTED_MODULE_10___default.a);\n    this.load.spritesheet('blood', _assets_blood_png__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      frameWidth: 88,\n      frameHeight: 71,\n      endFrame: 9\n    });\n    this.load.spritesheet('bone', _assets_bone_png__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      frameWidth: 18,\n      frameHeight: 18\n    });\n    this.load.spritesheet('bowser', _assets_bowser_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 49,\n      frameHeight: 37,\n      endFrame: 5\n    });\n    this.load.spritesheet('bowser', _assets_bowser_png__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      frameWidth: 49,\n      frameHeight: 37,\n      endFrame: 5\n    });\n    this.load.spritesheet('bowserCannonball', _assets_bowser_cannonball_png__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      frameWidth: 48,\n      frameHeight: 48,\n      endFrame: 7\n    });\n    this.load.spritesheet('bowserCopterPropeller', _assets_bowser_copter_propeller_png__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      frameWidth: 40,\n      frameHeight: 8,\n      endFrame: 2\n    });\n    this.load.spritesheet('muscle', _assets_muscle_png__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      frameWidth: 23,\n      frameHeight: 22\n    });\n  }\n\n  create() {\n    this.monkey = new _sprites_monkey__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n      scene: this,\n      x: this.game.config.width,\n      y: this.game.config.height\n    });\n    this.monkey.x -= this.monkey.displayWidth / 2;\n    this.physics.add.existing(this.monkey); // rotate propeller Animation\n\n    this.anims.create({\n      frameRate: 9,\n      frames: this.anims.generateFrameNumbers('bowserCopterPropeller', {\n        start: 0,\n        end: 2,\n        first: 0\n      }),\n      key: 'rotate',\n      repeat: -1\n    });\n    let bowserCopterContainer = this.add.container(this.monkey.x, this.game.config.height / 2 - 24);\n    let cannonball = this.add.sprite(0, -24, 'bowserCannonball', 0);\n    this.physics.add.existing(cannonball);\n    cannonball.alpha = 0;\n    this.cannonball = cannonball;\n    let bowserCopter = this.add.sprite(0, 0, 'bowserCopter', 0);\n    let bowserCopterPropeller = this.add.sprite(0, bowserCopter.height / 2 + 4, 'bowserCopterPropeller', 0);\n    bowserCopterPropeller.play('rotate');\n    this.anims.create({\n      frameRate: 6,\n      frames: this.anims.generateFrameNumbers('bowser', {\n        start: 0,\n        end: 5,\n        first: 0\n      }),\n      key: 'bowserHide'\n    });\n    let bowser = this.add.sprite(0, 0 - bowserCopter.height / 2 - 18 + 5, //(bowserCopter.y - (bowserCopter.height/2) - 18) + 5,\n    'bowser', 0);\n    bowserCopterContainer.add([cannonball, bowserCopter, bowserCopterPropeller, bowser]);\n    bowserCopterContainer.scaleX = -1;\n    this.time.delayedCall(1000, () => {\n      bowser.play('bowserHide');\n    });\n    this.time.delayedCall(2000, () => {\n      bowser.alpha = 0;\n      this.tweens.add({\n        targets: bowserCopterContainer,\n        angle: {\n          value: 179,\n          duration: 2500\n        }\n      });\n    }); // drop cannonball\n\n    this.time.delayedCall(4500, () => {\n      cannonball.alpha = 1;\n      cannonball.body.setGravityY(-750);\n      this.time.delayedCall(750, () => {\n        this.tweens.add({\n          targets: bowserCopterContainer,\n          angle: {\n            value: 1,\n            duration: 2500\n          }\n        });\n      });\n      this.time.delayedCall(3250, () => {\n        bowser.alpha = 1;\n        bowser.anims.playReverse('bowserHide');\n      });\n    });\n  }\n\n  update() {\n    if (this.cannonball.alpha) {\n      this.physics.overlap(this.cannonball, this.monkey, this.hitEnemy, this.checkBulletVsEnemy);\n    }\n  }\n\n  render() {}\n\n  checkBulletVsEnemy(bullet, enemy) {\n    return bullet.active && enemy.active;\n  }\n\n  hitEnemy(bullet, enemy) {\n    enemy.damage(bullet, enemy);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scenes/game6-bowser-and-peach.js?");

/***/ }),

/***/ "./src/sprites/animus.js":
/*!*******************************!*\
  !*** ./src/sprites/animus.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animus; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Animus extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\n  constructor({\n    scene,\n    x,\n    y,\n    victim\n  }) {\n    super(scene, x, y, 'animus');\n    this.victim = victim;\n    this.bladeHitSound = scene.sound.add('bladeHitSound');\n    scene.physics.add.existing(this);\n    scene.anims.create({\n      frameRate: 3,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 0,\n        end: 1,\n        first: 0\n      }),\n      key: 'laugh',\n      repeat: 3\n    });\n    scene.anims.create({\n      frameRate: 4,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 2,\n        end: 4,\n        first: 2\n      }),\n      key: 'pickUp'\n    });\n    scene.anims.create({\n      frameRate: 3,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 5,\n        end: 7,\n        first: 5\n      }),\n      key: 'putDown'\n    });\n    scene.anims.create({\n      frameRate: 4,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 10,\n        end: 13,\n        first: 10\n      }),\n      key: 'enjoyingBloodBath'\n    });\n    scene.anims.create({\n      frameRate: 2,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 11,\n        end: 12,\n        first: 11\n      }),\n      key: 'bloodBathFlicker',\n      repeat: -1\n    });\n    scene.anims.create({\n      frameRate: 2,\n      frames: scene.anims.generateFrameNumbers('animus', {\n        start: 14,\n        end: 15,\n        first: 14\n      }),\n      key: 'bloodyLaugh',\n      repeat: -1\n    });\n    scene.anims.create({\n      frameRate: 60,\n      frames: scene.anims.generateFrameNumbers('bloodSplat', {\n        start: 0,\n        end: 9,\n        first: 0\n      }),\n      key: 'bloodSplatter',\n      repeat: -1\n    });\n    scene.anims.create({\n      frameRate: 30,\n      frames: scene.anims.generateFrameNumbers('bloodPuddle', {\n        start: 0,\n        end: 4,\n        first: 0\n      }),\n      key: 'bloodPuddle',\n      repeat: -1\n    });\n    scene.add.existing(this);\n    this.on('animationcomplete', (anim, frame) => this.emit('animationcomplete_' + anim.key, anim, frame));\n    let blade = this.scene.add.sprite(this.scene.game.config.width - 31, this.scene.game.config.height + 104, 'blade', 0);\n    this.on('animationcomplete_laugh', anim => {\n      this.play('pickUp');\n    });\n    var bloodPuddle;\n    var bloodSplat;\n    this.on('animationcomplete_pickUp', anim => {\n      // put monkey in the air\n      this.scene.tweens.add({\n        targets: this.victim,\n        y: this.victim.y - 40,\n        duration: 1000,\n        ease: 'Sine.easeInOut'\n      }); // pull blade up quickly\n\n      this.scene.tweens.add({\n        targets: blade,\n        y: blade.y - 208,\n        duration: 250,\n        ease: 'Sine.easeInOut',\n        delay: 1000\n      });\n      this.scene.time.delayedCall(1000, () => {\n        this.bladeHitSound.play();\n        this.scene.cameras.main.shake(250, 0.01); // monkey's blood animation\n\n        this.victim.bloodAnimation(); // add blood splat\n\n        console.log(this.victim);\n        bloodSplat = this.scene.add.sprite(this.victim.x, this.victim.y - this.body.halfHeight, 'bloodSplat', 0);\n        bloodSplat.setOrigin(1, 0);\n        bloodSplat.play('bloodSplatter'); // blood puddle\n\n        bloodPuddle = this.scene.add.sprite(this.x - this.body.halfWidth, this.scene.game.config.height - 93 + 10, 'bloodPuddle', 0);\n        bloodPuddle.play('bloodPuddle');\n        this.play('enjoyingBloodBath');\n        this.scene.time.delayedCall(1000, () => this.play('bloodBathFlicker'));\n      });\n      this.scene.time.delayedCall(7750, () => {\n        this.play('putDown');\n      });\n    });\n    this.on('animationcomplete_putDown', anim => {\n      var destroyVictim = () => {\n        this.victim.destroy();\n      };\n\n      this.play('bloodyLaugh'); // hide bloodSplat\n\n      bloodPuddle.alpha = 0;\n      bloodSplat.alpha = 0; // blade down\n\n      this.scene.tweens.add({\n        targets: blade,\n        y: blade.y + 208,\n        x: blade.x + 90,\n        duration: 300,\n        ease: 'Sine.easeInOut'\n      });\n      this.scene.cameras.main.shake(300, 0.01);\n      this.victim.setOrigin(1, 1);\n      this.victim.setGravityY(800);\n      this.victim.setAngularVelocity(600);\n      this.victim.setVelocityX(600);\n      this.victim.setCollideWorldBounds(true);\n      this.scene.time.delayedCall(500, destroyVictim);\n    });\n    this.play('laugh');\n    return this;\n  }\n\n  update() {\n    if (!this.victim.body) return;\n    if (!this.victim.body.angularVelocity) return;\n    let touching = this.victim.body.checkWorldBounds();\n\n    if (touching) {\n      this.scene.time.delayedCall(150, function () {\n        this.victim.setAngularVelocity(0);\n      }, [], this);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sprites/animus.js?");

/***/ }),

/***/ "./src/sprites/bomb.js":
/*!*****************************!*\
  !*** ./src/sprites/bomb.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bomb; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Bomb extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\n  constructor({\n    scene,\n    x,\n    y\n  }) {\n    super(scene, x, y, 'bomb');\n    scene.physics.add.existing(this);\n    this.dropSound = scene.sound.add('bombDrop');\n    this.ejectSound = scene.sound.add('bombEject');\n    this.explosionSound = scene.sound.add('bombExplosion');\n    scene.anims.create({\n      frameRate: 20,\n      frames: scene.anims.generateFrameNumbers('bomb', {\n        start: 0,\n        end: 5,\n        first: 0\n      }),\n      key: 'bombAnimation',\n      repeat: -1\n    });\n    this.play('bombAnimation').setVelocity(160, 140).setBounce(1, 1).setCollideWorldBounds(true);\n    scene.add.existing(this);\n    this.ejectSound.play();\n    return this;\n  }\n\n  destroy() {\n    this.explosionSound.play();\n    super.destroy();\n  }\n\n  update() {\n    if (!this.active) return;\n    let touching = this.body.checkWorldBounds();\n    if (touching) this.dropSound.play();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sprites/bomb.js?");

/***/ }),

/***/ "./src/sprites/cyrax.js":
/*!******************************!*\
  !*** ./src/sprites/cyrax.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cyrax; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Cyrax extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\n  constructor({\n    scene,\n    x,\n    y\n  }) {\n    super(scene, x, y, 'cyrax');\n    this.setOrigin(0, 1);\n    scene.anims.create({\n      frameRate: 6,\n      frames: scene.anims.generateFrameNumbers('cyrax', {\n        start: 1,\n        end: 3,\n        first: 1\n      }),\n      key: 'victoryDance',\n      repeat: -1\n    });\n    scene.add.existing(this);\n  }\n\n  victoryDance() {\n    this.play('victoryDance');\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sprites/cyrax.js?");

/***/ }),

/***/ "./src/sprites/monkey.js":
/*!*******************************!*\
  !*** ./src/sprites/monkey.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monkey; });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Monkey extends phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Physics.Arcade.Sprite {\n  constructor({\n    scene,\n    x,\n    y\n  }) {\n    super(scene, x, y, 'monkey');\n    this.setOrigin(0.5, 1);\n    this.health = 1;\n    this.scene = scene;\n    scene.physics.add.existing(this);\n    this.setScale(6);\n    this.setOffset(4, 0); // bloodAnimation\n\n    scene.anims.create({\n      frameRate: 20,\n      frames: scene.anims.generateFrameNumbers('blood', {\n        start: 0,\n        end: 9,\n        first: 0\n      }),\n      hideOnComplete: true,\n      key: 'bloodAnimation',\n      repeat: 0\n    });\n    let bone = scene.add.particles('bone');\n    this.bones = bone.createEmitter({\n      frame: [0, 1, 2, 3, 4, 5, 6, 7],\n      speed: 750,\n      on: false\n    });\n    this.bones.startFollow(this);\n    let muscle = scene.add.particles('muscle');\n    this.muscles = muscle.createEmitter({\n      frame: [0, 1, 2, 3, 4, 5, 6, 7],\n      speed: 1500,\n      on: false\n    });\n    this.muscles.startFollow(this);\n    let explosion = scene.add.particles('explosion');\n    this.explosionFlash = explosion.createEmitter({\n      frame: 'muzzleflash2',\n      lifespan: 200,\n      scale: {\n        start: 4,\n        end: 0\n      },\n      rotate: {\n        start: 0,\n        end: 180\n      },\n      on: false\n    });\n    this.explosionFlash.startFollow(this);\n    scene.add.existing(this);\n  }\n\n  bloodAnimation() {\n    // blood\n    this.scene.add.sprite(this.x, this.y - this.body.halfHeight, 'blood').setScale(2.5).play('bloodAnimation');\n  }\n\n  showCodeMonkeyBanner() {\n    // show CodeMonkey.Games text\n    this.scene.add.text(this.x - (this.body.halfWidth + 10), this.y - this.body.halfHeight, 'CodeMonkey.Games', {\n      font: '\"Bangers\"'\n    });\n  }\n\n  destroy() {\n    this.bones.explode(16);\n    this.scene.cameras.main.shake(500, 0.01);\n    this.scene.time.delayedCall(25, function () {\n      this.explosionFlash.explode(1);\n      this.bloodAnimation();\n      this.muscles.explode(60);\n      this.showCodeMonkeyBanner();\n    }, [], this);\n    this.scene.time.delayedCall(50, () => {\n      this.muscles.explode(32);\n      super.destroy();\n    });\n  }\n\n  damage(bullet) {\n    this.health -= bullet.damagePoints || 1;\n    let isDead = this.health <= 0;\n\n    if (isDead) {\n      this.setActive(false);\n      this.setVisible(false);\n      this.destroy();\n    }\n\n    return isDead;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sprites/monkey.js?");

/***/ }),

/***/ "./src/sprites/parabomb.js":
/*!*********************************!*\
  !*** ./src/sprites/parabomb.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Parabomb; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Parabomb extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\n  constructor({\n    scene,\n    x,\n    y\n  }) {\n    super(scene, x, y, 'parabomb');\n    scene.physics.add.existing(this);\n    this.explosionSound = scene.sound.add('bombExplosion');\n    scene.anims.create({\n      frameRate: 9,\n      frames: scene.anims.generateFrameNumbers('parabomb', {\n        start: 0,\n        end: 4,\n        first: 2\n      }),\n      key: 'fall',\n      repeat: -1\n    });\n    scene.anims.create({\n      frameRate: 60,\n      frames: scene.anims.generateFrameNumbers('parabomb', {\n        start: 5,\n        end: 8,\n        first: 5\n      }),\n      key: 'land'\n    });\n    scene.anims.create({\n      frameRate: 20,\n      frames: scene.anims.generateFrameNumbers('parabomb', {\n        start: 9,\n        end: 13,\n        first: 9\n      }),\n      key: 'walk',\n      repeat: -1\n    });\n    scene.anims.create({\n      frameRate: 9,\n      frames: scene.anims.generateFrameNumbers('parabomb', {\n        start: 14,\n        end: 15,\n        first: 14\n      }),\n      key: 'stop'\n    });\n    scene.anims.create({\n      frameRate: 60,\n      frames: scene.anims.generateFrameNumbers('parabomb', {\n        start: 16,\n        end: 18,\n        first: 16\n      }),\n      key: 'aboutToExplode',\n      repeat: 6\n    });\n    this.play('fall').setGravityY(80).setCollideWorldBounds(true);\n    scene.add.existing(this);\n    this.on('animationcomplete_land', anim => {\n      this.play('walk');\n      this.setVelocityX(80);\n    });\n    this.on('animationcomplete_stop', anim => {\n      this.play('aboutToExplode');\n    });\n    this.on('animationcomplete_aboutToExplode', anim => {\n      this.explosionSound.play();\n      this.victim.destroy();\n      super.destroy();\n    });\n    return this;\n  }\n\n  destroy(bullet, enemy) {\n    this.victim = enemy;\n    this.setVelocityX(0);\n    this.play('stop');\n  }\n\n  update() {\n    if (!this.active) return;\n    let touching = this.body.checkWorldBounds();\n\n    if (touching && this.anims.getCurrentKey() == 'fall') {\n      this.setOffset(-19, -16);\n      this.setGravityY(800);\n      this.on('animationcomplete', (anim, frame) => this.emit('animationcomplete_' + anim.key, anim, frame));\n      this.play('land');\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/sprites/parabomb.js?");

/***/ })

/******/ });