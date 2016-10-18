// $('[data-lazyload="true"]').lazyload();

var data = require('./data.js');
var html = '';

html = template('tpl-banner', data);
$('#slider').html(html);

html = template('tpl-tabs-slide-list', data);
$('.slide-box').html(html);


$('[data-lazyload="true"]').each(function(i, item) {
  $(item).attr('src', $(item).data('original'));
})

// var mySwipe = new Swipe($('#slider').get(0), {});