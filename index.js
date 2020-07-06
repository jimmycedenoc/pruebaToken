const express = require('express');
const bodyParser =require('body-parser')
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const routes = require('./routes/routes');
const constant = require('./constants/constant');

var app = express();

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = constant.JWTSECRET;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    done(null, true);
}))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes)

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});