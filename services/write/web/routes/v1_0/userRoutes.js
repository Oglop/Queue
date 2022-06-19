const express = require('express');
const router = express.Router();
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { userSchema } = require('../../schemas').v1_0
const { scopeValidation } = require('../../middleware/scopeValidation')
const { SCOPES } = require('../../../../../config')
const { generateId, copyObject } = require('../../../../../lib')
const { executeCommand } = require('../../../application/commands/commandsHandler')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { CREATE_USER, CREATE_INVITATION } = require('../../../common/enums').COMMANDS
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on(CREATE_USER, async (data, id) => {
    await executeCommand({
        command: CREATE_USER, 
        data, 
        id
    })
})

eventEmitter.on(CREATE_INVITATION, async (data, id) => {
    await executeCommand({
        command: CREATE_INVITATION, 
        data, 
        id
    })
})


//const {} = require('')
/**
 * [] should have id
 */
module.exports = router.post('/', jsonSchemaRequestValidation(userSchema), validateAccessToken, scopeValidation([ SCOPES.USER_WRITE ]), async (req, res, next) => {
    const id = generateId()
    eventEmitter.emit(CREATE_USER, req.body, id)
    const success = copyObject(commandSuccessfulBody)
    success.id = id
    success.message = 'created'
    success.time = new Date().toISOString()
    res.status(201).send(success)
})

module.exports = router.post('/invites', jsonSchemaRequestValidation(userSchema), validateAccessToken, scopeValidation([ SCOPES.USER_INVITE_WRITE ]), async (req, res, next) => {
    const id = generateId()
    eventEmitter.emit(CREATE_INVITATION, req.body, id)
    const success = copyObject(commandSuccessfulBody)
    success.id = id
    success.message = 'created'
    success.time = new Date().toISOString()
    res.status(201).send(success)
})
