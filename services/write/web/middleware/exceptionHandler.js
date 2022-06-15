

const exceptionHandler = (err, req, res, next) => {
    if (err != null) {
        res.status(500).end()
    } else {
        next()
    }
}

module.exports = { exceptionHandler }