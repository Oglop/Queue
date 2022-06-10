const express = require('express');
const router = express.Router();
const { getAccessToken } = require('../../application/business/getAccessToken')
const { HOST, CONNECT_PORT, READ_PORT, WRITE_PORT } = require('../../../../config')
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
        const user = req.body.user

        const accessToken = await getAccessToken(clientId, clientSecret)
        res.status(200).send({
            readUri: `${HOST}:${READ_PORT}`,
            writeUri: `${HOST}:${WRITE_PORT}`,
            accessToken: accessToken
        })
    } catch (e) {
        res.status(401).end()
    }
    
});