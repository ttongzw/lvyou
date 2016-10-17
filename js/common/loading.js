lvyou.loading = {
  show: function() {
    if ($('.loading-wrap').length) {
      $('.loading-wrap').show();
    } else {
      $('body').append('<div class="loading-wrap"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
    }
  },
  hide: function() {
    $('.loading-wrap').hide();
  }
}

