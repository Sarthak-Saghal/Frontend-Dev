function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return "Name: " + this.name;
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function () {
  return "Department: " + this.department;
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSubject = function () {
  return "Subject: " + this.subject;
};

const person = new Person("Rahul");
const faculty = new Faculty("Anita", "Science");
const professor = new Professor("Nitin", "CSE", "Data Structures");

function showPerson() {
  document.getElementById("output").innerHTML =
    person.getName();
}

function showFaculty() {
  document.getElementById("output").innerHTML =
    faculty.getName() + "<br>" + faculty.getDepartment();
}

function showProfessor() {
  document.getElementById("output").innerHTML =
    professor.getName() +
    "<br>" +
    professor.getDepartment() +
    "<br>" +
    professor.getSubject();
}

function showPrototypeChain() {
  document.getElementById("output").innerHTML =
    "Professor → Faculty.prototype → Person.prototype → Object.prototype";
}
