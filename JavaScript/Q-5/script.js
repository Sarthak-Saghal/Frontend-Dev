let temp = +prompt("Enter temperature (°C):");
let humidity = +prompt("Enter humidity (%):");
let windSpeed = +prompt("Enter wind speed (km/h):");

if (temp > 35 && humidity > 70) {
  console.log("Cancel: Heat Alert.");
} else if (temp < 10 || windSpeed > 40) {
  console.log("Cancel: Cold/Windy Alert.");
} else {
  console.log("Event Approved.");
}

if (temp < 20) console.log("Wear Jacket");
else if (temp <= 30) console.log("Comfortable");
else console.log("Stay Hydrated");
