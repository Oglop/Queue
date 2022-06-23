
const getText = (id, args) => {
    switch (id) {
        case 'test': return 'test'
        case 'system-created': return 'created'
        case 'system-updated': return 'updated'
    }
}

module.exports = { getText }
