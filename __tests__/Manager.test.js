const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('Should create a manager instance', () => {
        const manager = new Manager (
            'Vince', '1', 'test@email.com', '100'
        )
        expect(manager.name).toEqual('Vince');
        expect(manager.id).toEqual('1');
        expect(manager.email).toEqual('test@email.com');
        expect(manager.officeNumber).toEqual('100');
    })
})