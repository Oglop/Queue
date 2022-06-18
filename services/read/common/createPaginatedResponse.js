const paginatedResponseBody = require('../web/responses/paginatedResponseBody')
const { copyObject } = require('../../../lib')
const { DEFAULT_PAGE_SIZE, READ_BASE_URL } = require('../../../config');
const { queryToUrlQuery } = require('../common/queryParser')

const createPaginatedResponse = (offset = 0, limit = parseInt(DEFAULT_PAGE_SIZE), size = 0, records = [], url = '', query = '') => {
    const response = copyObject(paginatedResponseBody)
    response.limit = parseInt(limit)
    response.offset = parseInt(offset)
    response.size = size
    response.data = records

    const nextLimit = (size < response.limit) ? -1 : response.limit
    const nextOffset = response.offset + size
    if (nextLimit != -1) {
        response.paging.next = `${READ_BASE_URL}${url}${queryToUrlQuery(query, nextLimit, nextOffset)}`
        response.paging.self = `${READ_BASE_URL}${url}${queryToUrlQuery(query, size, offset)}`
    } else {
        response.paging.next = ''
        response.paging.self = `${READ_BASE_URL}${url}${queryToUrlQuery(query, size, offset)}`
    }
    return response
}

module.exports = {
    createPaginatedResponse
}