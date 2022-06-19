const { listRoleValidator } = require('../../../services/read/application/validation/v1_0/listRoleValidator')

describe('listRoleValidator unit tests', () => {
    test('listRoleValidator should be instance of function', () => {
        expect(listRoleValidator).toBeInstanceOf(Function)
    })
    test('should return true when checking no keys', () => {
        const actual = listRoleValidator({})
        expect(actual).toBeTruthy()
    })
    test('should return true when checking allowed keys', () => {
        const actual = listRoleValidator({offset: 0, limit: 0, name: 'name'})
        expect(actual).toBeTruthy()
    })
    test('should return false when checking allowed keys and not allowed keys', () => {
        const actual = listRoleValidator({unallowed: 'unallowed'})
        expect(actual).toBeFalsy()
    })
})