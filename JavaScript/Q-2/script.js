let accountType = prompt("Enter account type (savings / fd):").toLowerCase();
let amount = +prompt("Enter deposit amount:");
let years = +prompt("Enter number of years:");

let rate;

if (accountType === "savings") {
  rate = 4;
} else if (accountType === "fd") {
  rate = 6.5;
} else {
  console.log("Invalid account type");
  rate = 0; 
}

if (amount > 100000) {
  rate += 1;
}

let total = amount * Math.pow((1 + rate / 100), years);

total = total.toFixed(2);

console.log("Final Balance after " + years + " years: ₹" + total);
