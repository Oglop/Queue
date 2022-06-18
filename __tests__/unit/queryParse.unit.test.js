const { queryToUrlQuery, reduceQuery } = require('../../services/read/common/queryParser')

describe('queryParser unit tests', () => {
    test('queryToUrlQuery should be instance of function', () => {
        expect(queryToUrlQuery).toBeInstanceOf(Function)
    })
    test('queryToUrlQuery should return a string with limit and offset', () => {
        const query = {
            test: 'test',
            limit: 2,
            offset: 7
        }
        const actual = queryToUrlQuery(query, query.limit, query.offset)
        const expected = `?test=test&limit=${query.limit}&offset=${query.offset}`
        expect(actual).toBe(expected)
    })
    test('queryToUrlQuery should return a string with limit and offset', () => {
        const query = {
            limit: 0,
            offset: 10
        }
        const actual = queryToUrlQuery(query, query.limit, query.offset)
        const expected = `?limit=${query.limit}&offset=${query.offset}`
        expect(actual).toBe(expected)
    })
    test('queryToUrlQuery should return a string with limit and offset', () => {
        const query = {
            aaa: 'aaa',
            bbb: 'bbb',
            limit: 2,
            offset: 4
        }
        const actual = queryToUrlQuery(query, query.limit, query.offset)
        const expected = `?aaa=${query.aaa}&bbb=${query.bbb}&limit=${query.limit}&offset=${query.offset}`
        expect(actual).toBe(expected)
    })
    test('queryToUrlQuery should return a string with limit and offset', () => {
        const query = {
            aaa: 'aaa',
            bbb: 'bbb'
        }
        const actual = queryToUrlQuery(query, query.limit, query.offset)
        const expected = `?aaa=${query.aaa}&bbb=${query.bbb}`
        expect(actual).toBe(expected)
    })


    test('reduceQuery should be instance of function', () => {
        expect(reduceQuery).toBeInstanceOf(Function)
    })
    test('reduceQuery shoud remove limit key', () => {
        const query = {
            test: 'test',
            limit: 0
        }
        const actual = reduceQuery(query)
        expect(actual.find(e => e.test == 'test')).not.toBeUndefined()
        expect(actual.find(e => e.limit == 0)).toBeUndefined()
    })

})