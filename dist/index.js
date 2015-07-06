(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["space-cowboy"] = factory();
	else
		root["space-cowboy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var LEFT = 'left';
	exports.LEFT = LEFT;
	var RIGHT = 'right';
	exports.RIGHT = RIGHT;
	var TOP = 'top';
	exports.TOP = TOP;
	var BOTTOM = 'bottom';

	exports.BOTTOM = BOTTOM;
	var getBiggerDistance = function getBiggerDistance(distA, distB, constA, constB) {
	    return distA >= distB ? [distA, constA, distB, constB] : [distB, constB, distA, constA];
	};

	var getPosition = function getPosition(elemPosition, viewportHeight, viewportWidth) {

	    var distTop = elemPosition.top;
	    var distBottom = viewportHeight - elemPosition.bottom;
	    var distLeft = elemPosition.left;
	    var distRight = viewportWidth - elemPosition.right;

	    var _getBiggerDistance = getBiggerDistance(distTop, distBottom, TOP, BOTTOM);

	    var _getBiggerDistance2 = _slicedToArray(_getBiggerDistance, 2);

	    var distanceTopBottom = _getBiggerDistance2[0];
	    var POS_TOP_BOTTOM = _getBiggerDistance2[1];

	    var _getBiggerDistance3 = getBiggerDistance(distLeft, distRight, LEFT, RIGHT);

	    var _getBiggerDistance32 = _slicedToArray(_getBiggerDistance3, 2);

	    var distanceLeftRight = _getBiggerDistance32[0];
	    var POS_LEFT_RIGHT = _getBiggerDistance32[1];

	    var _getBiggerDistance4 = getBiggerDistance(distanceTopBottom, distanceLeftRight, POS_TOP_BOTTOM, POS_LEFT_RIGHT);

	    var _getBiggerDistance42 = _slicedToArray(_getBiggerDistance4, 4);

	    var primary = _getBiggerDistance42[1];
	    var secondary = _getBiggerDistance42[3];

	    return { primary: primary, secondary: secondary };
	};
	exports.getPosition = getPosition;

/***/ }
/******/ ])
});
;