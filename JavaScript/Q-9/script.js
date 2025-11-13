let delayedBooks = +prompt("Enter number of delayed books:");
let totalFine = 0;

for (let i = 1; i <= delayedBooks; i++) {
  let days = +prompt(`Enter delay days for book ${i}:`);

  if (days <= 5) totalFine += days * 10;
  else if (days <= 10) totalFine += days * 20;
  else totalFine += days * 50;
}

if (delayedBooks > 3) totalFine += 200;

console.log("Total Fine:", totalFine);
