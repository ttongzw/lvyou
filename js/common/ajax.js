$(document).bind({
  ajaxSend: function() {
    lvyou.loading.show();
  },
  ajaxComplete: function() {
    lvyou.loading.hide();
  }
});
