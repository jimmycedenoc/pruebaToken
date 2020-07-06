const jwt = require('jsonwebtoken');
const constant = require('../constants/constant');

class LoginController {
    login(req, res) {
        const payload = {
            username: req.body.username
        };
        const token = jwt.sign(JSON.stringify(payload), constant.JWTSECRET );
        res.json(token);
    }

    verifToken(req, res) {
        res.send('Token VERIFICADO!');
    }
}

module.exports = new LoginController();