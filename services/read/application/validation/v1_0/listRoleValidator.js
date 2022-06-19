const allowedKeys = [ 'offset','limit', 'name' ]

const listRoleValidator = query => {
    const test = Object.keys(query)
    return !!(!test.filter(i => !allowedKeys.includes(i)).length)
}

module.exports = {
    listRoleValidator
}