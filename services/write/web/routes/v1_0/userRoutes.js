const express = require('express');
const router = express.Router();
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { userSchema } = require('../../schemas')
const { scopeValidation } = require('../../middleware/scopeValidation')
const { SCOPES } = require('../../../../../config')
//const {} = require('')
/**
 * [] should have id
 */
module.exports = router.post('/', jsonSchemaRequestValidation(userSchema), validateAccessToken, scopeValidation([ SCOPES.USER_WRITE ]), async (req, res, next) => {
    



    /*const id = req.params.id
    
    const result = await getRoomQuery(id)
    if (result) {
        body.data.push(result)
    } else {
        res.status(204).end()
        return
    }
    body.size = body.data.length
    res.status(200).json(body);*/
})

module.exports = router.post('/invite', jsonSchemaRequestValidation(userSchema), validateAccessToken, scopeValidation([ SCOPES.USER_INVITE ]), async (req, res, next) => {

})
