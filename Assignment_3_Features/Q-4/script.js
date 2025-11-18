function showMessage() {
  debugger;
  let greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessage();
} catch (err) {
  console.log("Error:", err.message);
}

console.log(`
Reason:
Strict mode prevents creating variables without let/const/var.
The original code tried to create a global variable accidentally,
which strict mode blocks.
`);

console.log(`
Fix:
Declare the variable using 'let', giving it proper function scope.
`);


