// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html



$(function() {
  console.log("hello world :o");

  $("form").submit(function(event) {
    event.preventDefault();

    var user = {
      name: $('input#name').val(),
      email: $('input#email').val(),
      password: $('input#password').val()
    }

    $.post("/api/log", { userData: user }, function() {
      $("input").val("");
      $("input").focus();
    });
  });
});
