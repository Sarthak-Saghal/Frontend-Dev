let limit = 5;

console.log(`Generating pyramid for limit = ${limit}\n`);

console.log("---- USING let ----");
for (let i = 1; i <= limit; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

for (var x = 1; x <= limit; x++) {
  var line = "";
  for (var y = 1; y <= x; y++) {
    line += "* ";
    debugger;
  }
  console.log(line);
}

console.log(`
Explanation:
• let keeps i, j inside their own block scope.
• var leaks out of inner loop and can overwrite values unexpectedly.
• debugger lets you step through and inspect x, y reuse.
`);

function generatePyramid(n) {
  console.log(`\nGenerated Pyramid (n = ${n}):`);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row);
  }
}

generatePyramid(limit);
