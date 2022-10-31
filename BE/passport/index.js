const passport = require('passport');
const google = require('./google');
const kakao = require('./kakao');
const naver = require('./naver');
const local = require('./local');
const jwt = require('./jwt');
const User = require('../models/users');
const Auth = require('../models/auth');

// if controller session false, console x
passport.serializeUser((user, done) => {
  console.log('a :', user.id);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('b :', id);
  const user = await User.findOne({ id });
  const auth = await Auth.findOne({ id });

  try {
    done(null, user || auth);
  } catch (err) {
    done(err);
  }
  // .then((user) => done(null, user))
  // .catch((err) => done(err));
});

passport.use(local);
passport.use(kakao);
passport.use(google)
passport.use(naver)
passport.use(jwt);

module.exports = passport;
