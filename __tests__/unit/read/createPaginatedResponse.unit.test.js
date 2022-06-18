const { createPaginatedResponse } = require('../../../services/read/common/createPaginatedResponse')

jest.mock('../../../config', () => {
    return {
        DEFAULT_PAGE_SIZE: 99,
        READ_BASE_URL:'READ_URL'
    }
})

jest.mock('../../../services/read/common/queryParser', () => ({ queryToUrlQuery: jest.fn((z,x,y) => `?test=test&l=${x}&o=${y}`) }));

describe('createPaginatedResponse unit tests', () => {
    test('createPaginatedResponse should be instance of function', () => {
        expect(createPaginatedResponse).toBeInstanceOf(Function)
    })
    test('should return a responsebody with empty paging next when size is less than limit', () => {
        const actual = createPaginatedResponse(0, 10, 2, [ {id: '1'}, {id: '2'} ], '/URL', { test:'test' })
        expect(actual.paging.next).toBe('')
        expect(actual.paging.self).toBe('READ_URL/URL?test=test&l=2&o=0')
        expect(actual.offset).toBe(0)
        expect(actual.limit).toBe(10)
        expect(actual.size).toBe(2)
    })
    test('should return a responsebody with paging self and next when size is equal to limit', () => {
        const actual = createPaginatedResponse(5, 10, 10, [ {id: '1'}, {id: '2'} ], '/URL', { test:'test' })
        expect(actual.paging.next).toBe('READ_URL/URL?test=test&l=10&o=15')
        expect(actual.paging.self).toBe('READ_URL/URL?test=test&l=10&o=5')
        expect(actual.offset).toBe(5)
        expect(actual.limit).toBe(10)
        expect(actual.size).toBe(10)
    })
})