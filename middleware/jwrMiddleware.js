const passport = require('passport');

class JwtMiddleware {
    jwtStrategy(req, res, next) {
        passport.authenticate('jwt', {session: false}, (err, verifyTocken, info) => {
            if (err || !verifyTocken) {
                res.status(401);
                return res.send('Token no valido.');
            }
            next();
        })(req, res, next);
    }
}

module.exports = new JwtMiddleware();