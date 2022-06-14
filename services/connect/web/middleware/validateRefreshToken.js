const jwt = require('jsonwebtoken');
const { REFRESH_SECRET_KEY, HOST, CONNECT_PORT } = require('../../../../config')
const validateRefreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken

    try {
        const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY, { iss: `${HOST}:${CONNECT_PORT}`});
        if (Date.now() >= decoded.exp * 1000) {
            res.status(401).end()
        }
        next()
    } catch(e) {
        console.log(e.message)
        res.status(401).end()
    }
    
}

module.exports = {
    validateRefreshToken
}