const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const gooUser = require('../models/auth');


module.exports = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log('___google profile', profile);
    try {
        const exUser = await gooUser.findOne({
          id: profile.id,
        });
        if (exUser) {
          console.log('exUser : ', exUser);
          done(null, exUser);
        } else {
          const user = await new gooUser({
            email: profile._json && profile._json.google_account_email,
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
    }
);