const express = require('express');
const router = express.Router();
const { copyObject, generateId } = require('../../../../../lib')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { executeCommand } = require('../../../application/commands/commandsHandler')
const { roomSchema } = require('../../schemas').v1_0
const { ROOM_WRITE } = require('../../../../../config').SCOPES
const { CREATE_ROOM_v1_0 } = require('../../../common/enums').COMMANDS
const { scopeValidation } = require('../../middleware/scopeValidation')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on(CREATE_ROOM_v1_0, async (data, id) => {
    await executeCommand({
        command: CREATE_ROOM_v1_0, 
        data, 
        id
    })
})

module.exports = router.post('/', jsonSchemaRequestValidation(roomSchema), validateAccessToken, scopeValidation([ ROOM_WRITE ]),  async (req, res, next) => {
    const id = generateId()
    eventEmitter.emit(CREATE_ROOM_v1_0, req.body, id)
    const success = copyObject(commandSuccessfulBody)
    success.id = result.id
    success.message = result.message
    success.time = new Date().toISOString()
    res.status(201).send(success)
});
