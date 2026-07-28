// Akan names for each day of the week
const akanNames = [
  { day: "Sunday", male: "Kwasi", female: "Akosua" },
  { day: "Monday", male: "Kwadwo", female: "Adwoa" },
  { day: "Tuesday", male: "Kwabena", female: "Abenaa" },
  { day: "Wednesday", male: "Kwaku", female: "Akua" },
  { day: "Thursday", male: "Yaw", female: "Yaa" },
  { day: "Friday", male: "Kofi", female: "Afua" },
  { day: "Saturday", male: "Kwame", female: "Ama" }
];

const form = document.getElementById("akan-form");
const resultSection = document.getElementById("result");
const akanNameElement = document.getElementById("akan-name");
const akanDayElement = document.getElementById("akan-day");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});