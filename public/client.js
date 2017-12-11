// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('form').submit(function(event) {
    event.preventDefault();
    var log = $('input').val();
    $.post('/api/log', {log: log}, function() {
      $('input').val('');
      $('input').focus();
      $('.checkout-those-logs').show();
    });
  });

});
