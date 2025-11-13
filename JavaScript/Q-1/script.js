let orderAmount = +prompt("Enter order amount:");
let isPremium =
  prompt("Are you a premium member? (yes/no)").toLowerCase() === "yes";
let isRemote =
  prompt("Is the address remote? (yes/no)").toLowerCase() === "yes";

let deliveryFee = 0;

if (orderAmount < 500 && !isPremium) {
  deliveryFee = 50;
}

let totalCost = orderAmount + deliveryFee;

let deliveryTime = 3;
if (isRemote) {
  deliveryTime += 2;
}

console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time:", deliveryTime, "days");
