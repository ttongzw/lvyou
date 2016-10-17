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
	// 
	var data = __webpack_require__(1);
	var html = '';

	html = template('tpl-banner', data);
	$('#slider').html(html);

	html = template('tpl-entrance-list', data);
	$('.index-entrance').html(html);

	html = template('tpl-tabs-slide-list', data);
	$('.slide-list').eq(0).html(html);

	$('[data-lazyload="true"]').each(function (i, item) {
		$(item).attr('src', $(item).data('original'));
	});

	var mySwipe = new Swipe($('#slider').get(0), {
		transitionEnd: function transitionEnd(index, elem) {
			$('#slider .swipe-pagination').find('.swipe-pagination-bullet-active').removeClass('swipe-pagination-bullet-active');
			$('#slider .swipe-pagination').find('.swipe-pagination-bullet').eq(index).addClass('swipe-pagination-bullet-active');
		}
	});

/***/ },
/* 1 */
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
	  entrance: [{
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1009/20161009114212869.png",
	    title: "景区门票"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1009/20161009114227324.png",
	    title: "出境游"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008090614889.png",
	    title: "国内游"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008090630720.png",
	    title: "底价疯抢"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008090646731.png",
	    title: "周边游"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008090700856.png",
	    title: "度假酒店"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008090714118.png",
	    title: "亲子游"
	  }, {
	    href: "#",
	    img: "http://image.juntu.com/uploadfile/2016/1008/20161008060210162.png",
	    title: "自驾游"
	  }],
	  slides: [{
	    id: "1",
	    title: "大秦温泉养生苑",
	    areaName: "西安",
	    img: "http://image.juntu.com/uploadfile/2016/0114/20160114032236989.jpg",
	    describe: "西北五省规模最大的温泉之一 体验帝王温泉养生 感悟秦朝文化",
	    price: "￥118"
	  }, {
	    id: "2",
	    title: "大秦温泉养生苑",
	    areaName: "西安",
	    img: "http://image.juntu.com/uploadfile/2016/0114/20160114032236989.jpg",
	    describe: "西北五省规模最大的温泉之一 体验帝王温泉养生 感悟秦朝文化",
	    price: "￥128"
	  }, {
	    id: "3",
	    title: "大秦温泉养生苑",
	    areaName: "西安",
	    img: "http://image.juntu.com/uploadfile/2016/0114/20160114032236989.jpg",
	    describe: "西北五省规模最大的温泉之一 体验帝王温泉养生 感悟秦朝文化",
	    price: "￥138"
	  }]
	};

	module.exports = data;

/***/ }
/******/ ]);