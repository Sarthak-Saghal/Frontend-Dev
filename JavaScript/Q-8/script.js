let salary = +prompt("Enter base salary:");
let rating = +prompt("Enter performance rating (1-5):");
let experience = +prompt("Enter experience in years:");

let bonusPercent = 0;

if (rating == 5) bonusPercent = 20;
else if (rating == 4) bonusPercent = 15;
else if (rating == 3) bonusPercent = 10;

if (experience > 5) bonusPercent += 5;

let bonus = (salary * bonusPercent) / 100;

if (salary > 100000 && bonus > 25000) bonus = 25000;

let totalSalary = salary + bonus;

console.log("Bonus:", bonus);
console.log("Total Salary After Bonus:", totalSalary);
