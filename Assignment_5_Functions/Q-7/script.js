function makeMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const doubleFn = makeMultiplier(2);
const tripleFn = makeMultiplier(3);

function double() {
  document.getElementById("output").innerHTML = doubleFn(10);
}

function triple() {
  document.getElementById("output").innerHTML = tripleFn(10);
}
     