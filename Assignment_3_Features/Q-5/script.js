console.log(`
Original Broken Code:

console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}
`);

console.log(`
• var score → hoisted, initialized as undefined
• function announce() → fully hoisted with body
• let status → hoisted but kept in TDZ (Temporal Dead Zone)
• function startGame() → fully hoisted with body

Sequence problem:
- console.log(score) prints undefined
- announce() works (function is hoisted)
- status is not yet initialized, so calling startGame immediately causes ReferenceError
`);

function announce() {
  console.log("Game started");
}

function startGame(status) {
  console.log(status);
}

var score = 50;
let status = "ready";

console.log(score);
announce();
startGame(status);

const announceArrow = () => console.log("Game started (arrow)");

const startGameArrow = (status) => console.log(status);

let score2 = 75;
let status2 = "running";

console.log(score2);
announceArrow();
startGameArrow(status2);
