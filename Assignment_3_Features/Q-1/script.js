const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined,
];

const validNumbers = [];
const invalidNumbers = [];

console.log(
  "Hoisting test → function declared below still works:",
  testHoist()
);

function testHoist() {
  return "Hoisting works only for function declarations, not for let/const variables.";
}

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const asNumber = Number(value);
  const asBoolean = Boolean(value);
  const asString = String(value);

  console.log(`\nOriginal Value:`, value);
  console.log(`→ Number:`, asNumber);
  console.log(`→ Boolean:`, asBoolean);
  console.log(`→ String:`, asString);

  if (Number.isNaN(asNumber)) {
    console.log("Invalid number detected:", value);
    invalidNumbers.push(value);
  } else {
    validNumbers.push(asNumber);
  }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);

for (let i = 0; i < apiData.length; i++) {
  const v = apiData[i];
  const num = Number(v);

  if (Number.isNaN(num)) {
    console.log(`"${v}" → INVALID NUMBER`);
  } else {
    console.log(`"${v}" → VALID NUMBER: ${num}`);
  }
}
