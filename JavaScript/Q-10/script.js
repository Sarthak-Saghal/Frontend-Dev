let num = Math.floor(Math.random() * 100) + 1;
console.log("Your coupon number:", num);

if (num <= 30) console.log("You won a 10% discount");
else if (num <= 60) console.log("You won a 20% discount");
else if (num <= 90) console.log("You won a 30% discount");
else console.log("You won a 50% Mega Offer!");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}

if (isPrime(num)) console.log("Prime number bonus applied!");
  