import { testframework } from "./testframework.js";
import Employee from "./employee.js";
import WageEmployee from "./WageEmployee.js";
import Manager from "./Manager.js";
import Company from "./Company.js";

function runCompanyTests() {
  const commonScript = `
      const company = new Company();
      const empl1 = new Employee("Alice", 5000, "Sales");
      const empl2 = new Employee("Bob", 6000, "Marketing");
      const empl3 = new Employee("Charlie", 5500, "Sales");
      const empl4 = new WageEmployee("David", 4000, "Marketing", 160, 20);
      const empl5 = new Manager("Eve", 7000, "Sales", 1.2);
      company.addEmployee(empl1);
      company.addEmployee(empl2);
      company.addEmployee(empl3);
      company.addEmployee(empl4);
      company.addEmployee(empl5);
    `;

  const scripts = [
    "company.getDepBudget('Sales')",
    "company.getDepBudget('Marketing')",
    "company.getDepBudget('HR')",
    "company.getEmployeesMaxSalary().map(emp => emp.name)",
    "company.getEmployeesDepartment('Sales').map(emp => emp.name)",
    "company.getEmployeesDepartment('Marketing').map(emp => emp.name)",
    "company.employees['Alice'].name",
    "company.employees['David'].computeSalary()",
    "company.employees['Eve'].computeSalary()",
  ];

  const expectedResults = [
    18900,
    13200,
    0,
    ["Eve"],
    ["Alice", "Charlie", "Eve"],
    ["Bob", "David"],
    "Alice",
    7200,
    8400,
  ];

  testframework("Company Tests", commonScript, scripts, expectedResults);
}

runCompanyTests();
