//const Employee = require("./Employee");
import Employee from "./Employee";

class Engineer extends Employee {
    constructor(name,id,email,github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";

    }
}
export default Engineer;