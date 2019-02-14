var place_temp_celsius, place_temp_fahrenheit;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}
function showPosition(position) {
  $.getJSON(
    "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=" +
      position.coords.latitude +
      "&lon=" +
      position.coords.longitude +
      "&appid=c430bcc2026796e6c4ab68e0e35552a1",
    function(obj) {
      var iconlink =
        "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
      var place_name = obj.name;
      place_temp_celsius = obj.main.temp - 273.15;
      var place_wind_speed = obj.wind.speed;
      var place_fore_main = obj.weather[0].main;
      var place_fore_humidity = obj.main.humidity;
      $("#weather-icon").attr("src", iconlink);
      $("#place-name").html(place_name);
      $("#weather-main").html(place_fore_main);
      $("#weather-temp").html(place_temp_celsius + " °C");
      $("#weather-wind").html(place_wind_speed + " km/h");
      $("#weather-humidity").html(place_fore_humidity + " %");
    }
  );
}
$(document).ready(function() {
  $("#toggler").click(function() {
    if ($("#toggler").text() == "°F") {
      place_temp_fahrenheit = Math.round(place_temp_celsius * (9 / 5) + 32);
      $("#weather-temp").html(place_temp_fahrenheit + " °F");
      $("#toggler").html("°C");
    } else if ($("#toggler").text() == "°C") {
      place_temp_celsius = Math.round((place_temp_fahrenheit - 32) / (9 / 5));
      $("#weather-temp").html(place_temp_celsius + " °C");
      $("#toggler").html("°F");
    }
  });
});