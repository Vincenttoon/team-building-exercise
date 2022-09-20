const Employee = require('../lib/Employee');

// class function to turn employee into engineer
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return 'Engineer'
    }
    getSchool() {
        return this.github
    }
}

module.exports = Engineer;