var jwt = require('jsonwebtoken');
const { ACCESS_SECRET_KEY } = require('../../../../config')

const createAccessToken = (roleId, userId, audience, issuer, scopes) => {
    return jwt.sign({
        role: roleId,
        user: userId,
        aud: audience,
        iss: issuer,
        scopes: scopes
        }, ACCESS_SECRET_KEY, { expiresIn: 60 * 15 })
}

module.exports = { createAccessToken }