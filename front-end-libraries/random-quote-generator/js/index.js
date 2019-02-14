var mquote = "";
var qauthor = "";
$(document).ready(function() {
  function setquote() {
    $.getJSON(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      function(obj) {
        mquote = obj.quoteText;
        qauthor = obj.quoteAuthor;
        $("#quoter").fadeIn();
        $("#quoter").html(mquote + "<br><br>" + qauthor);
        var cval = getRandomColor();
        $("body").css("background-color", cval);
        $("#quoter").css("color", cval);
        $("#quoteb").css("color", cval);
        $("#bird").css("color", cval);
      }
    );
  }
  setquote();
  $("#quoteb").click(function() {
    setquote();
  });
  $("#tweetie").click(function() {
    $("#tweetie").attr('href', 'https://twitter.com/intent/tweet?hashtags=fccquoter&related=freecodecamp&text=' + encodeURIComponent('"' + mquote + '" ' + qauthor));
  });
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}