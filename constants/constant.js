const constant = {
    JWTSECRET: process.env.JWTSECRET || 'secret'
}

module.exports = Object.freeze(constant);
