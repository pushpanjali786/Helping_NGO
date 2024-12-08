const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector("button.close");
const btnsOpenModal = document.querySelector(".show-modal");
const signUP = document.querySelector(".btn btn-outline-primary");
const subt = document.querySelector(".subt");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
subt.addEventListener("click", function () {
  alert("Our team reaching Soon.");
});
// js for getMyLocation
const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");

function geo() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      getLocation(lat, long);
    });
  }
}

const getLocation = async (lat, long) => {
  try {
    const response = await fetch(
      `http://api.positionstack.com/v1/reverse?access_key=d72c6b9912f63eb9912d54fefcf89c7d&query=${lat},${long}`
    );

    const data = await response.json();
    console.log(data);
    const country = data.data[0];

  country_container.innerHTML = `
  <label>${country.label}</label>
  `;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", geo);

// js for getMyLocation Ends here 



// read more function

function myFunction(i) {
  var dots = document.getElementById(`dots${i}`);
  var moreText = document.getElementById(`more${i}`);
  var btnText = document.getElementById(`myBtn${i}`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
