const passport = require('passport');
const google = require('./google');
const kakao = require('./kakao');
const naver = require('./naver');

const auth = require('../models/auth');

passport.serializeUser((user, done) => {
  console.info('a', user);
  done(null, user['_id']);
});

passport.deserializeUser((id, done) => {
  console.log('b', id);
  auth
    .findOne({ id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(kakao);
// passport.use(google)
// passport.use(naver)
module.exports = passport;
