const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/userModel')
const bcrypt = require("bcryptjs");
require('dotenv').config()


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({email});
    if (!user) {
      return done(null, false, {message: 'Email not found'});
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, {message: 'Wrong password'});
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.use(new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY
    }, async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.userId)
        if (!user) {
          return done(null, false)
        }
        return done(null, user)
      } catch (error) {
        return done(null, error)
      }
    }
  )
)

module.exports = passport
