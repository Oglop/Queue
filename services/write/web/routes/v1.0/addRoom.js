const express = require('express');
const router = express.Router();
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { addRoomCommand } = require('../../../application/commands/v1.0/addRoomCommand')
const { roomSchema } = require('../../schemas').v1_0
/**
 * [] should have id
 */
module.exports = router.post('/', jsonSchemaRequestValidation(roomSchema), validateAccessToken, async (req, res, next) => {
    await addRoomCommand(req.body)
    res.status(201).end()
});

