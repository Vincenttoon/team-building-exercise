// require Intern.js for testing purposes
const Intern = require('../lib/Intern');

// push intern data using previous employee parameters
describe('Intern', () => {
    test('Should create an intern instance', () => {
        const intern = new Intern (
            'Vince', '1', 'test@email.com', 'university'
        )
        expect(intern.name).toEqual('Vince');
        expect(intern.id).toEqual('1');
        expect(intern.email).toEqual('test@email.com');
        expect(intern.school).toEqual('university');
    })
})