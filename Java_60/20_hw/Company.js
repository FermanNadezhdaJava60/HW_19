
export default class Company {

    constructor() {
        this.employees = {} 
    }
    addEmployee(empl) {
        this.employees[empl.name] = empl;
    }
    deleteEmployee (empl) {
        delete this.employees[empl.name];
    }
    getDepBudget(department) {
        return Object.values(this.employees)
            .filter(empl => empl.department === department)
            .reduce((total, empl) => total + empl.computeSalary(), 0);
    }
    getEmployeesMaxSalary() {
        const employeesArray = Object.values(this.employees);
        if (employeesArray.length === 0) {
            return [];
        }

        const maxSalary = employeesArray.reduce((max, empl) => Math.max(max, empl.computeSalary()), -Infinity);
        return employeesArray.filter(empl => empl.computeSalary() === maxSalary);
    }
    getEmployeesDepartment(department) {
        return Object.values(this.employees)
        .filter(empl => empl.department === department);
    }
}