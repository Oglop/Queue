
const copyObject = object => {
    return JSON.parse(JSON.stringify(object))
}

const generateId = (options = { length: 16, numeric: false  }) => {
    let result = '';
    const characters = (options.numeric) ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < options.length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


module.exports = {
    copyObject,
    generateId
}
