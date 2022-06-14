var jwt = require('jsonwebtoken');
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = require('../../../../config')
const { getAccessTokenQuery } = require('../../infrastructure/queries/accessTokenQuery')
const { getRoleByUserEmail } = require('../../infrastructure/queries/roleByUserQuery')

const getAccessToken = async (clientId, clientSecret, email) => {
    const id = await getAccessTokenQuery(clientId, clientSecret)
    const roleUser = await getRoleByUserEmail(email)
    const accessToken = jwt.sign({
        role: roleUser.roleId,
        user: roleUser.userId,
        aud: id.audience,
        iss: id.issuer,
        scopes: id.scope
        }, ACCESS_SECRET_KEY, { expiresIn: 60 * 15 })

    const refreshToken = jwt.sign({
        user: roleUser.userId,
        iss: id.issuer,
    }, REFRESH_SECRET_KEY, { expiresIn: 60 * 60 * 7 })

        
    return {
        role: roleUser.role,
        user: roleUser.user,
        accessToken,
        refreshToken
    }
}

module.exports = {
    getAccessToken
}