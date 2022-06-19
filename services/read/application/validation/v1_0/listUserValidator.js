const allowedKeys = [ 'offset','limit' ]

const listUserValidator = query => {
    const test = Object.keys(query)
    return !!(!test.filter(i => !allowedKeys.includes(i)).length)
}

module.exports = {
    listUserValidator
}