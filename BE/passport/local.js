const local = require('passport-local').Strategy;
const user = require('../models/users');
const bcrypt = require('bcrypt');

module.exports = new local(
  {
    usernameField: 'id',
    passwordField: 'password',
  },
  async (id, password, done) => {
    // console.log('local :', id, password);
    let existingUser;
    try {
      existingUser = await user.findOne({ id: id });
      if (existingUser) {
        PW = await bcrypt.compare(password, existingUser.password);
        if (PW) done(null, existingUser);
        else done(null, false, { message: '비밀번호 불일치.' });
      } else {
        done(null, false, { message: '아이디가 없음.' });
      }
    } catch (error) {
      console.error(error);
      return done(error);
    }
  }
);
