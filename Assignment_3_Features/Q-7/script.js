const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
  num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;

    case "subtract":
      return a - b;

    case "divide":
      if (b === 0) throw new Error("DivideByZeroError");
      return a / b;

    case "power":
      return a ** b;

    case "root":
      if (a < 0) throw new Error("NegativeRootError");
      return Math.sqrt(a);

    default:
      throw new Error("InvalidOperationError");
  }
}

console.log("Operations:", operations);
console.log(`Using values → num1 = ${num1}, num2 = ${num2}\n`);

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];

  try {
    const result = calculate(op, num1, num2);

    console.log(`
Operation: ${op}
Input: ${num1}, ${num2}
Result: ${result}
Status: SUCCESS
`);
  } catch (error) {
    console.log(`
Operation: ${op}
Input: ${num1}, ${num2}
Error: ${error.message}
Status: FAILED
`);
  }
}
