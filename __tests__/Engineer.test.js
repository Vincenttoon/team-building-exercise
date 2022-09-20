// require Engineer.js for testing purposes
const Engineer = require('../lib/Engineer');

// push engineer data using previous employee parameters
describe('Engineer', () => {
    test('Should create an engineer instance', () => {
        const engineer = new Engineer (
            'Vince', '1', 'test@email.com', 'github'
        )
        expect(engineer.name).toEqual('Vince');
        expect(engineer.id).toEqual('1');
        expect(engineer.email).toEqual('test@email.com');
        expect(engineer.github).toEqual('github');
    })
})