const express = require('express');
const router = express.Router();
const JwrMiddleware = require('../middleware/jwrMiddleware');
const LoginController = require('../controllers/loginController');

router.post('/login', LoginController.login);
router.get('/verify', JwrMiddleware.jwtStrategy, LoginController.verifToken);

module.exports = router;