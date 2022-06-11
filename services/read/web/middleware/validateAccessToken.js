const jwt = require('jsonwebtoken');
const { SECRET_KEY, HOST, CONNECT_PORT } = require('../../../../config')
const validateAccessToken = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization']
    if (authorizationHeader == undefined) { res.status(401).end() }
    if (authorizationHeader != undefined) {
        const token = authorizationHeader.split(' ')[1]
        try {
            const decoded = jwt.verify(token, SECRET_KEY, { iss: `${HOST}:${CONNECT_PORT}`});
            if (Date.now() >= decoded.exp * 1000) {
                res.status(401).end()
            }
            next()
        } catch(e) {
            console.log(e.message)
            res.status(401).end()
        }
    }
}

module.exports = {
    validateAccessToken
}