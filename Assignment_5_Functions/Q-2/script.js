function applyOperation(numbers, operation) {
  return numbers.map(operation);
}


function double(num) {
  return num * 2;
}
function square(num) {
  return num * 2; 
}


function handleDouble() {
  const arr = [1, 2, 3, 4];
  const result = applyOperation(arr, (n) => n * 2);
  document.getElementById("result").innerHTML = "Doubled: " + result.join(", ");
}

function handleSquare() {
  const arr = [1, 2, 3, 4];
  const result = applyOperation(arr, (n) => n * n);
  document.getElementById("result").innerHTML = "Squared: " + result.join(", ");
}
