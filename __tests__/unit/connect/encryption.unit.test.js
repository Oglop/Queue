const { encrypt, verify } = require('../../../services/connect/application/business/encryption')

describe('encryption unit tests', () => {
    test('encrypt should be an instance of Function', () => {
        expect(encrypt).toBeInstanceOf(Function)
    })

    test('verify should be an instance of Function', () => {
        expect(verify).toBeInstanceOf(Function)
    })

    test('correct encrypted password should verify true', async () => {
        const value = 'ORIGINAL_VALUE'
        const hashedValue = await encrypt(value)
        expect(await verify(value, hashedValue)).toBe(true)
    })

    test('incorrect encrypted password should verify false', async () => {
        const value = 'ORIGINAL_VALUE'
        const hashedValue = await encrypt(value)
        expect(await verify('DIFFERENT_VALUE', hashedValue)).toBe(false)
    })
})