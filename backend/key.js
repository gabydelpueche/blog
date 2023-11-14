const crypto = require('crypto');
function generateKey(){
    const key = crypto.randomBytes(32)
    return key.toString('base64');
}

const randomKey = generateKey()