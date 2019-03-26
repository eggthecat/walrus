$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
  $(".clickable1").click(function() {
    $("#initially-showing1").toggle();
    $("#initially-hidden1").toggle();
  });
});
