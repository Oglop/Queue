const { compare, hash } = require('bcrypt')
const { error } = require('../../../../logger')
/**
 * 
 * @param {string} value 
 * @returns {string} hashed password
 */
const encrypt = async (value) => {
    try {
        const hashedPassword = await hash(value, 10)
        return hashedPassword
    }
    catch (e) {
        error(`encrypt password error: ${e.massage}`, __filename, 'encrypt', 'create')
    }
}

/**
 * 
 * @param {string} key 
 * @param {string} value 
 * @returns {bool} is equal
 */
const verify = async (plainValue, hashedValue) => {
    try {

        if (await compare(plainValue, hashedValue)) {  return true }
    }
    catch (e) {
        error(`verifying password error: ${e.massage}`, __filename, 'verify', 'create')
    }
    return false
}

module.exports = {
    encrypt, verify
}