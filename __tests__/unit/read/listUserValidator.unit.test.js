const { listUserValidator } = require('../../../services/read/application/validation/listUserValidator')

describe('listUserValidator unit test', () => {
    test('listUserValidator should instance of Function', () => {
        expect(listUserValidator).toBeInstanceOf(Function)
    })
    test('should return false when checking unallowed keys', () => {
        const actual = listUserValidator({unallowed: 'unallowed'})
        expect(actual).toBeFalsy()
    })
    test('should return true when checking allowed keys', () => {
        const actual = listUserValidator({offset: 0, limit: 0})
        expect(actual).toBeTruthy()
    })
    test('should return false when checking allowed keys and not allowed keys', () => {
        const actual = listUserValidator({offset: 0, unallowed: 'unallowed'})
        expect(actual).toBeFalsy()
    })
})