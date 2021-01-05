$("button.hideh1").on("click", function() {
  $("h1").animate({opacity: 0.5}).animate({margin: 30}).slideUp();
});
$("button.showh1").on("click", function() {
  $("h1").animate({margin: "30%"});
});
$("button.toggleh1").on("click", function() {
  $("h1").animate({margin: 40});
});

