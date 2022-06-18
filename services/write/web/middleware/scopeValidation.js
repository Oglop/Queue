const jwt = require('jsonwebtoken')
const { ADMIN_SCOPE } = require('../../../../config')

const scopeValidation = requiredScopes => {
    return (req, res, next) => {
        try {
            const authorizationHeader = req.headers['authorization']
            if (authorizationHeader == undefined) { res.status(401).end() }
            if (authorizationHeader != undefined) {
                const token = authorizationHeader.split(' ')[1]
                const decoded = jwt.decode(token)
    
                for (let scope of requiredScopes) {
                    if (decoded.scopes.find(c => c == ADMIN_SCOPE) != undefined) { break }
                    if (decoded.scopes.find(c => c == scope) == undefined) {
                        throw 'forbidden'
                    }
                }

                next()
            }   
        } catch (e) {
            res.status(403).end()
            return
        }
    }
}

module.exports = { scopeValidation }