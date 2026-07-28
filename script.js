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

//Add Validation // validate the input
if (day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    return;
}
if (month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    return;
}
if (!genderInput) {
    alert("Please select a gender.");
    return;
}

const gender = genderInput.value;

//calculate the day of the week with the given formula
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day;

let dayOfWeek = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
dayOfWeek = Math.floor(dayOfWeek);
if (dayOfWeek < 0) {
    dayOfWeek += 7;
}

//Match the calculated day to Akan name and display the result
const akanName = akanNames[dayOfWeek][gender];
const akanDay = akanNames[dayOfWeek].day;

resultSection.classList.remove("hidden");
akanNameElement.textContent = akanName;
akanDayElement.textContent = `You were born on a ${akanDay}.`;
