const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const User = require('../models/users');
const Auth = require('../models/auth');

module.exports = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
    secretOrKey: process.env.TOKEN,
  },
  async (payload, done) => {
    try {
      console.log('payload : ', payload);
      // palyload의 id값으로 유저의 데이터 조회 ( id까지 저장한다면 )
      // sequelize를 이용할 경우
      const local = await User.findOne({ id: jwtPayload.id });
      const auth = await Auth.findOne({ snsId: jwtPayload.id });
      if (local || auth) {
        done(null, local || auth);
        return;
      } else done(null, false, { reason: '올바르지 않은 인증정보입니다.' }); // 유저 데이터가 없을 경우 에러 표시
      done(null, local || auth);
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);
