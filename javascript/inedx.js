function updateTime(){

let riyadhElement = document.querySelector("#riyadh");
if (riyadhElement) {
let riyadhDateElement = riyadhElement.querySelector(".date");
let riyadhTimeElement = riyadhElement.querySelector(".time");
let riyadhTime = moment().tz("Asia/Riyadh");

riyadhDateElement.innerHTML = riyadhTime.format("MMMM do YYYY");
riyadhTimeElement.innerHTML = riyadhTime.format(" hh:mm:ss [<small>]A[</small>]");
};

let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format(
  "hh:mm:ss [<small>]A[</small>]");
}
};

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">Back</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);