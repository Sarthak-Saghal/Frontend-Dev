function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return "Name: " + this.name;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBranch = function () {
  return "Branch: " + this.branch;
};

const person = new Person("Rohan");
const student = new Student("Nitin", "CSE");

function showPerson() {
  document.getElementById("output").innerHTML = person.getName();
}

function showStudent() {
  document.getElementById("output").innerHTML =
    student.getName() + "<br>" + student.getBranch();
}

function showPrototypeChain() {
  const chain =
    "student → Student.prototype → Person.prototype → Object.prototype";
  document.getElementById("output").innerHTML = chain;
}
