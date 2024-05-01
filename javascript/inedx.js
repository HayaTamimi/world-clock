function updateTime(){

let riyadhElement = document.querySelector("#riyadh");
let riyadhDateElement = riyadhElement.querySelector(".date");
let riyadhTimeElement = riyadhElement.querySelector(".time");
let riyadhTime = moment().tz("Asia/Riyadh");

riyadhDateElement.innerHTML = riyadhTime.format("MMMM do YYYY");
riyadhTimeElement.innerHTML = riyadhTime.format(" hh:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format(
  " hh:mm:ss [<small>]A[</small>]");
};


updateTime();
setInterval(updateTime, 1000);