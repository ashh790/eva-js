class SupportExecutive {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, ID: ${this.employeeId}, Department: ${this.department}, Experience: ${this.experience} years`);
    }
}