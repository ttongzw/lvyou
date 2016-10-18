// $('[data-lazyload="true"]').lazyload();
// 
var data = require('./data.js');
var html = '';

html = template('tpl-banner', data);
$('#slider').html(html);

html = template('tpl-entrance-list', data);
$('.index-entrance').html(html);

html = template('tpl-tabs-slide-list', data);
$('.slide-list').eq(0).html(html);


$('[data-lazyload="true"]').each(function(i, item) {
  $(item).attr('src', $(item).data('original'));
})

var mySwipe = new Swipe($('#slider').get(0), {
	transitionEnd: function(index, elem) {
		$('#slider .swipe-pagination').find('.swipe-pagination-bullet-active').removeClass('swipe-pagination-bullet-active');
		$('#slider .swipe-pagination').find('.swipe-pagination-bullet').eq(index).addClass('swipe-pagination-bullet-active');
	}
});