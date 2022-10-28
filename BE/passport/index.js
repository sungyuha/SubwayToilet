const passport = require('passport');
const google = require('./google');
const kakao = require('./kakao');
const naver = require('./naver');

const auth = require('../models/auth');

passport.serializeUser((user, done) => {
  console.info('a', user);
  done(null, user.name);
});

passport.deserializeUser((name, done) => {
  console.log('b', name);
  auth
    .findOne({ name })
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(kakao);
module.exports = passport;
