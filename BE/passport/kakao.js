const Kakao = require('passport-kakao').Strategy;
const kaUser = require('../models/auth');

module.exports = new Kakao(
  {
    clientID: process.env.KAKAO,
    callbackURL: process.env.KAKAO_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.info('pro', profile);
    try {
      const exUser = await kaUser.findOne({
        sns_id: profile.id,
      });
      if (exUser) {
        console.log(exUser);
        done(null, exUser);
      } else {
        const user = await new kaUser({
          email: profile._json && profile._json.kakao_account_email,
          nickname: profile.displayName,
          id: profile.id,
          provider: 'kakao',
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
