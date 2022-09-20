const Employee = require('../lib/Employee');

// class function to turn employee into intern
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;