const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    if (!emp.name || !emp.salary || !emp.years) {
      throw new Error("Missing employee property!");
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(
        "Conversion Error: salary or years is not a valid number."
      );
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(`
Employee Name : ${emp.name}
Salary        : ₹${salary}
Years Worked  : ${years}
Bonus Earned  : ₹${bonus}
Status        : ${
      years > 3 ? "Eligible for 10% bonus" : "Eligible for 5% bonus"
    }`);
  } catch (error) {
    console.log(` Error for employee index ${i}: ${error.message}`);
  }
}
