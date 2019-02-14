function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
}

$("#panel1").click(function() {
  scrollToAnchor("aboutme");
});
$("#panel2").click(function() {
  scrollToAnchor("technicalskills");
});
$("#panel3").click(function() {
  scrollToAnchor("portfolio");
});
$("#panel4").click(function() {
  scrollToAnchor("contactme");
});