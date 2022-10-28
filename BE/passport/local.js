const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, async (id, password, done) => {
    try {
      if ( name == fakeUser.name ){
        if ( password == fakeUser.password ) {
          console.log( "*****Login Success*****")
          done(null, fakeUser);
        } else {
          console.log("*****Password Invalid*****");
          done(null, false, {message: '비밀번호가 일치하지 않습니다.'} );
        }
      } else {
        console.log("*****Username invalid*****");
        done(null, false, {message: '사용자 이름이 존재하지 않습니다.'} );
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
