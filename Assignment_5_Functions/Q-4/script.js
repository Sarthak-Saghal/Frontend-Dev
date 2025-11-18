function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  return this.brand + " " + this.model;
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

function showCar1() {
  document.getElementById("result").innerHTML = car1.getDetails();
}

function showCar2() {
  document.getElementById("result").innerHTML = car2.getDetails();
}
