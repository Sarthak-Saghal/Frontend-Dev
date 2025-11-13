let showTime = prompt("Enter show time (morning/evening):").toLowerCase();
let ticketCount = +prompt("Enter number of tickets:");
let age = +prompt("Enter your age:");

let pricePerTicket;

if (showTime === "morning") {
  pricePerTicket = 120;
} else if (showTime === "evening") {
  pricePerTicket = 180;
} else {
  console.log("Invalid show time.");
}

let basePrice = pricePerTicket * ticketCount;

let discount = 0;
if (age <= 22) {     
  discount = basePrice * 0.10;
} 
else if (age > 60) { 
  discount = basePrice * 0.20;
}

let discountedTotal = basePrice - discount;

let serviceFee = 0;
if (ticketCount > 3) {
  serviceFee = 50;
}

let finalAmount = discountedTotal + serviceFee;

console.log("Base Price: ₹" + basePrice);
console.log("Discounted Total: ₹" + discountedTotal);
console.log("Final Amount to Pay: ₹" + finalAmount);
