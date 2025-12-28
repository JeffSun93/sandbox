function increaseSalary(employeeObj, increasePercentage) {
  employeeObj.salary += employeeObj.salary * (increasePercentage / 100);
  return employeeObj;
}

const employee = { informalId: 'Mezz Davies', salary: 28000 };

increaseSalary(employee, 10);

console.log(employee);
