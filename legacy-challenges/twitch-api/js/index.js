// NOTE: The processing can be written in such a way that JSON data cleaning can be done in a separate function with some sort of return value without using the same logic thrice. Saves memory space and lines of code.

// Array to store sample data set of Twitch users
var tuser = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];
$(document).ready(function() {
  // The final data to be displayed
  var dispdata;   
  // In order: Stores user's page URL, username, details about current streaming, their profile picture. buff used as a temporary variable... of sorts.
	var userurl, username, streamstat, userlogo, buff;
  // Shows all sample users
  $("#allusers").click(function() {
    dispdata = "";
    for (var i = 0; i < tuser.length; i++) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + tuser[i] + "?callback=?", function(obj) {
        buff = obj["_links"]["self"];
        // Because self URL's last portion is the Twitch username.
        username = buff.substr((buff.lastIndexOf("/"))+1);
      	userurl = "https://www.twitch.tv/"+username;
        // Checks if offline or online basically.
        if (obj["stream"]) {
         streamstat = obj["stream"]["channel"]["status"];
         userlogo = obj["stream"]["channel"]["logo"];
        }
        else {
         streamstat = "Offline";
         userlogo = "https://www.theyearinpictures.co.uk/images//image-placeholder.png";
        }
        // Load output data into dispdata variable to be used momentarily.
        dispdata += "<div class = 'row streamprop paddown'><div class = 'col-xs-6'><img class = 'imgprop' src = "+userlogo+"></div><div class = 'col-xs-6'><p class = 'proprop'><a href = "+userurl+" target = '_blank'>"+username+"</a><br>"+streamstat+"</p></div></div>";
        // Display output
        $("#displayer").html(dispdata);
       });
      }
  });
  // Shows online users
  $("#onusers").click(function() {
    dispdata = "";
    for (var i = 0; i < tuser.length; i++) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + tuser[i] + "?callback=?", function(obj) {
        // Checks if online.
        if (obj["stream"]) {
          buff = obj["_links"]["self"];
          username = buff.substr((buff.lastIndexOf("/"))+1);
      	  userurl = "https://www.twitch.tv/"+username;
          streamstat = obj["stream"]["channel"]["status"];
          userlogo = obj["stream"]["channel"]["logo"];
          dispdata += "<div class = 'row streamprop paddown'><div class = 'col-xs-6'><img class = 'imgprop' src = "+userlogo+"></div><div class = 'col-xs-6'><p class = 'proprop'><a href = "+userurl+" target = '_blank'>"+username+"</a><br>"+streamstat+"</p></div></div>";
        $("#displayer").html(dispdata);
       }
      });
     }
  });
  // Shows offline users
  $("#offusers").click(function() {
    dispdata = "";
    for (var i = 0; i < tuser.length; i++) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + tuser[i] + "?callback=?", function(obj) {
        // Checks if offline.
        if(!obj["stream"]) {
          buff = obj["_links"]["self"];
          username = buff.substr((buff.lastIndexOf("/"))+1);
      	  userurl = "https://www.twitch.tv/"+username;
          userlogo = "";
          dispdata += "<div class = 'row streamprop paddown'><div class = 'col-xs-6'><img class = 'imgprop' src = 'https://www.theyearinpictures.co.uk/images//image-placeholder.png'></div><div class = 'col-xs-6'><p class = 'proprop'><a href = "+userurl+" target = '_blank'>"+username+"</a></p></div></div>";
        // Display output
        $("#displayer").html(dispdata);
        }
       });
      }
  });
});