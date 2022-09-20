const Engineer = require('../lib/Engineer');

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