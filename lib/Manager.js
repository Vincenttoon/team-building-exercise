const Employee = require('../lib/Employee')

// class function to turn employee into manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email) 
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    
}

module.exports = Manager;