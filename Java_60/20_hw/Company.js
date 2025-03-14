
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
        return this.getEmployeesDepartment(department)
            .reduce((total, empl) => total + empl.computeSalary(), 0);
    }
    getEmployeesMaxSalary() {
        const employeesArray = Object.values(this.employees);
        
        const maxSalary =  Math.max(...employeesArray.map(empl => empl.computeSalary()));
        return employeesArray.filter(empl => empl.computeSalary() === maxSalary);
    }
    getEmployeesDepartment(department) {
        return Object.values(this.employees)
        .filter(empl => empl.department === department);
    }
}