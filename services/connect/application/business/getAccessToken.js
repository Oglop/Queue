const { createRefreshToken } = require('./createRefreshToken')
const { createAccessToken } = require('./createAccessToken')
const { getAccessTokenQuery } = require('../../infrastructure/queries/accessTokenQuery')
const { getRoleByUserEmail } = require('../../infrastructure/queries/roleByUserQuery')

const getAccessToken = async (clientId, clientSecret, email) => {
    const id = await getAccessTokenQuery(clientId, clientSecret)
    const roleUser = await getRoleByUserEmail(email)
    const accessToken = createAccessToken(
        roleUser.roleId,
        roleUser.userId,
        id.audience,
        id.issuer,
        id.scope
    )
    const refreshToken = createRefreshToken(roleUser.userId, id.issuer)
        
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