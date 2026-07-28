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

//Dom references plus submitting the listener 
const form = document.getElementById("akan-form");
const resultSection = document.getElementById("result");
const akanNameElement = document.getElementById("akan-name");
const akanDayElement = document.getElementById("akan-day");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

//Retreving and spliting the user's input
const birthdateValue = document.getElementById("birthdate").value;
const genderInput = document.querySelector('input[name="gender"]:checked');

const parts = birthdateValue.split("-")
const year = Number(parts[0]);
const month = Number(parts[1]);
const day = Number(parts[2]);
