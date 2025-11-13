let level = +prompt("Enter level:");
let performanceScore = +prompt("Enter performance score:");
let missionsCompleted =
  prompt("All missions completed? (yes/no)").toLowerCase() === "yes";

let coins = level * 50 + performanceScore * 10;

if (missionsCompleted) coins *= 2;

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("Coins Earned:", coins);
console.log("Rank:", rank);
