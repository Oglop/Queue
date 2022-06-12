


const db = [
    {
        clientId: '12345',
        clientSecret: 'secret',
        audience: ['localhost:8080'],
        issuer: 'localhost:8082',
        allowedScopes: ['queue.read', 'queue.write']
    }
]

const getAccessTokenQuery = async (clientId, clientSecret) => {
    try {
        const id = db.find(i => i.clientId == clientId)
        if (id != undefined) {
            if (id.clientSecret == clientSecret) {
                return id
            }
        }
        throw 'unathorized'
    } catch (e) {
        throw e.message
    }
}

module.exports = {
    getAccessTokenQuery
}