//get html element references
var l_lat = document.getElementById("lat");
var l_long = document.getElementById("long");

//function should get the location from the browser.  Note that Chrome won't do this from a http, it needs to be https.  So your projects in xampp might not be able to do it unless you are using the proper ports
function getLocation() {
  if (navigator.geolocation) { navigator.geolocation.getCurrentPosition( showPosition, showError);
  } else {
    l_lat.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//lets rock some error handling
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      l_lat.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      l_lat.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      l_lat.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      l_lat.innerHTML = "An unknown error occurred."
      break;
  }
}

//this function just fills in some coords into some elements
function showPosition(position) {
  l_lat.innerHTML = "Latitude: " + position.coords.latitude;
  l_long.innerHTML = "Longitude: " + position.coords.longitude;
  //here I am testing some JSON formats to store
  var location = {location:[position.coords.latitude, position.coords.longitude]};
  var loc = {'location':{'latitude': position.coords.latitude, 'longitude':position.coords.longitude}};
  //console.log(position);
  //console.log(location);
  //console.log(loc);
  return location;
}

//actually calling the function
getLocation();

//and if you wanted the actual coords as a JSON
//var JSON_location = getLocation();
