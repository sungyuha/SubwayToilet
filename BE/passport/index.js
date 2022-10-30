const passport = require('passport');
const google = require('./google');
const kakao = require('./kakao');
const naver = require('./naver');
const local = require('./local');
const jwt = require('./jwt');

const auth = require('../models/auth');

passport.serializeUser((user, done) => {
  console.log('a', user);
  done(null, user['_id']);
});

passport.deserializeUser((id, done) => {
  console.log('b', id);
  auth
    .findOne({ id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(local);
passport.use(kakao);
// passport.use(google)
// passport.use(naver)
passport.use(jwt);

module.exports = passport;
