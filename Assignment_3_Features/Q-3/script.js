const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const t = transactions[i];

    debugger;

    if (t === null) throw new Error("Null Transaction");
    if (!t.id || t.amount === undefined) throw new Error("Missing Property");
    if (t.amount < 0) throw new Error("Negative Amount");

    valid.push(t);

    console.log(`Transaction ${t.id} processed: Amount = ${t.amount}`);
  } catch (err) {
    invalid.push({ index: i, error: err.message });
    console.log(`Error at index ${i}: ${err.message}`);
  }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Success Count:", valid.length);
console.log("Failed Count:", invalid.length);
