const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");

const locationLogo = document.getElementById("location-logo");
const ngoContainer = document.getElementById("ngo-container");

// Event Listeners
registerButton.addEventListener("click", handleRegisterClick);
loginButton.addEventListener("click", handleLoginClick);

locationLogo.addEventListener("click", handleLocationClick);

// Event Handlers
function handleRegisterClick() {
  alert("Clicked Register!");
}

function handleLoginClick() {
  alert("Clicked Login!");
}

function handleLocationClick() {
  if ("geolocation" in navigator) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  alert(`Your current position is: ${latitude}, ${longitude}`);
  // TODO: Filter NGOs based on the user's current location
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
