//const Employee = require("./Employee");
import Employee from "./Employee";
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";

    }
}
export default Manager;