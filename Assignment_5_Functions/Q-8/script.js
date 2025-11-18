Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const arr = [1, 2, 3, 4];

function doubleNumbers() {
  document.getElementById("result").innerHTML =
    arr.myMap(n => n * 2).join(", ");
}

function squareNumbers() {
  document.getElementById("result").innerHTML =
    arr.myMap(n => n * n).join(", ");
}
