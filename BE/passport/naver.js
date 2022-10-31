const Naver = require('passport-naver').Strategy;
const navUser = require('../models/auth')

module.exports = new Naver({
    clientID: process.env.NAVER,
    clientSecret: process.env.NAVER_SECRET,
    callbackURL: process.env.NAVER_URL
},
async (accessToken, refreshToken, profile, done) => {
    console.info('pro', profile);
    try {
        const exUser = await navUser.findOne({
        id: profile.id,
      });
      if (exUser) {
        console.log('exUser : ', exUser);
        done(null, exUser);
      } else {
        const user = await new navUser({
          email: profile._json && profile._json.naver_account_email,
          nickname: profile.displayName,
          id: profile.id,
          provider: 'naver',
        });
        user.save((err) => {
          if (err) {
            console.log(err);
          }
          console.log(user);
          return done(err, user);
        });
      }
    } catch (err) {
      console.error(err);
      done(err);
    }
  
})