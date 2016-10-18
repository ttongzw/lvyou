/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// $('[data-lazyload="true"]').lazyload();

	var data = __webpack_require__(2);
	var html = '';

	html = template('tpl-banner', data);
	$('#slider').html(html);

	html = template('tpl-tabs-slide-list', data);
	$('.slide-box').html(html);

	$('[data-lazyload="true"]').each(function (i, item) {
	  $(item).attr('src', $(item).data('original'));
	});

	// var mySwipe = new Swipe($('#slider').get(0), {});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var data = {
	  banner: [{
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/0919/20160919044632819.jpg"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1010/20161010113822930.jpg"
	  }, {
	    href: "http://www.baidu.com",
	    img: "http://image.juntu.com/uploadfile/2016/0902/20160902062253388.jpg"
	  }],
	  slides: [{
	    id: "1",
	    title: "大秦温泉养生苑",
	    type: "成人票",
	    pricejt: "118",
	    pricemt: "199",
	    tips: "可在 22:00 前预订今日票",
	    cut: "立减五元",
	    coupon: "优惠券"
	  }, {
	    id: "2",
	    title: "大秦温泉养生苑",
	    type: "成人票",
	    pricejt: "118",
	    pricemt: "199",
	    tips: "可在 22:00 前预订今日票",
	    cut: "",
	    coupon: "优惠券"
	  }, {
	    id: "2",
	    title: "大秦温泉养生苑",
	    type: "成人票",
	    pricejt: "118",
	    pricemt: "199",
	    tips: "可在 22:00 前预订今日票",
	    cut: "立减五元",
	    coupon: ""
	  }, {
	    id: "3",
	    title: "大秦温泉养生苑",
	    type: "成人票",
	    pricejt: "118",
	    pricemt: "199",
	    tips: "可在 22:00 前预订今日票",
	    cut: "",
	    coupon: ""
	  }]
	};

	module.exports = data;

/***/ }
/******/ ]);