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

$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
});
