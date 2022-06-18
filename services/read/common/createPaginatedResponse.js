const paginatedResponseBody = require('../web/responses/paginatedResponseBody')
const { copyObject } = require('../../../lib')
const { DEFAULT_PAGE_SIZE, HOST, READ_PORT } = require('../../../config');
const { queryToUrlQuery } = require('../common/queryParser')

const createPaginatedResponse = (offset = 0, limit = parseInt(DEFAULT_PAGE_SIZE), size = 0, records = [], baseUrl = '', query = '') => {
    const response = copyObject(paginatedResponseBody)
    response.limit = parseInt(limit)
    response.offset = parseInt(offset)
    response.size = size
    response.data = records

    const nextLimit = (size < response.limit) ? -1 : response.limit
    const nextOffset = response.offset + size
    if (nextLimit != -1) {
        response.paging.next = `${HOST}:${READ_PORT}${baseUrl}${queryToUrlQuery(query, nextLimit, nextOffset)}`
        response.paging.self = `${HOST}:${READ_PORT}${baseUrl}${queryToUrlQuery(query, size, offset)}`
    } else {
        response.paging.next = ''
        response.paging.self = `${HOST}:${READ_PORT}${baseUrl}${queryToUrlQuery(query, size, offset)}`
    }
    return response
}

module.exports = {
    createPaginatedResponse
}