
function demoLoose(a, a) {
  total = 10;     
  delete total;     
  console.log("total in loose mode:", typeof total);
}

demoLoose(5, 10);

function demoStrict(a, a) {
  "use strict";
  total = 10;      
  delete total;
  console.log(total);
}

try {
  demoStrict(5, 10);
} catch (err) {
  console.log("STRICT MODE ERROR:", err.message);
}

console.log(`
Differences:

• Duplicate parameters (a, a) are allowed in loose mode, but illegal in strict mode.
• Assigning to undeclared variable 'total' creates a global in loose mode, but throws an error in strict mode.
• delete total is ignored in loose mode, but throws an error in strict mode because variables cannot be deleted.

Strict mode prevents silent failures and unsafe operations.
`);

function demoFixed(a, b) {
  "use strict";
  let total = 10;
  console.log("Correct total:", total);
}

demoFixed(5, 10);

