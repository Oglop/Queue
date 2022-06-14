var jwt = require('jsonwebtoken');
const { REFRESH_SECRET_KEY } = require('../../../../config')

const createRefreshToken = (userId, issuer) => {
    return jwt.sign({
        user: userId,
        iss: issuer,
    }, REFRESH_SECRET_KEY, { expiresIn: 60 * 30 })
}

module.exports = { createRefreshToken }