const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        this.name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getemail() {
        return this.email;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";

    }
}
module.exports = Intern;