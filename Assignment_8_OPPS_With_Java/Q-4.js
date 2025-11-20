class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(
      `${this.name} is working in the ${this.department} department.`
    );
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  work() {
    console.log(`${this.name} is managing the ${this.department} department.`);
  }
}

const emp = new Employee("Nitin Goyal", "IT");
const mgr = new Manager("Nav Goyal", "Sales");

const staff = [emp, mgr];

staff.forEach((member) => {
  member.work();
});
