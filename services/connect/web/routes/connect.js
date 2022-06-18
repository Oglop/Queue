const express = require('express');
const router = express.Router();
const { getAccessToken } = require('../../application/business/getAccessToken')
const { READ_BASE_URL, WRITE_BASE_URL } = require('../../../../config')
const { jsonSchemaRequestValidation } = require('../middleware/jsonSchemaValidation')
const { accessTokenSchema } = require('../schemas')

/**
 * [] body must have clientId
 * [] body must have clientSecret
 */
module.exports = router.post('/', jsonSchemaRequestValidation(accessTokenSchema), async (req, res, next) => {
    try {
        const clientId = req.body.clientId
        const clientSecret = req.body.clientSecret
        const email = req.body.email

        const { accessToken, refreshToken, role, user } = await getAccessToken(clientId, clientSecret, email)

        res.status(200).send({
            readUri: `${READ_BASE_URL}`,
            writeUri: `${WRITE_BASE_URL}`,
            accessToken,
            refreshToken,
            role,
            user
        })
    } catch (e) {
        console.log(e.message)
        res.status(401).end()
    }
    
});