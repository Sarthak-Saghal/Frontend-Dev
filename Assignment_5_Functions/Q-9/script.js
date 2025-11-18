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

const protoStudent = new Student("Nitin", "CSE");

function showProto() {
  document.getElementById("output").innerHTML =
    protoStudent.getName() + "<br>" + protoStudent.getBranch();
}

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return "Name: " + this.name;
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  getBranch() {
    return "Branch: " + this.branch;
  }
}

const classStudent = new StudentClass("Nitin", "CSE");

function showClass() {
  document.getElementById("output").innerHTML =
    classStudent.getName() + "<br>" + classStudent.getBranch();
}
