const regex = new RegExp('^[0-9]+$');

const validatePagingQueryParams = (req, res, next) => {
    const messages = []
    if (req.query.offset) {
        try {
            if (!regex.test(req.query.offset)) {
                throw 'invalid input'
            }
        } catch (e) {
            console.error(e.message)
            messages.push('offset parameter must be an integer')
        }
    }
    if (req.query.limit) {
        try {
            if (!regex.test(req.query.limit)) {
                throw 'invalid input'
            }
        } catch (e) {
            console.error(e.message)
            messages.push('limit parameter must be an integer')
        }
    }
    if (messages.length > 0) {
        res.status(400).send({
            message: messages
        })
    } else {
        next() 
    }
}

module.exports = {
    validatePagingQueryParams
}