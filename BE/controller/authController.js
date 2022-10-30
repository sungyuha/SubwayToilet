const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

// 토큰 생성
function setUserToken(res, user) {
  const token = jwt.sign({ user }, process.env.TOKEN, {
    expiresIn: '10m',
  });
  // console.log(token);
  res.cookie('token', token);
}

// 로컬 로그인
exports.postLocal = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    // local의 done함수..
    // console.log(authError);
    // console.log(user);
    // console.log(info);
    if (authError) return next(authError);
    if (!user) return res.redirect('http://localhost:3000/login');
    // jwt 토큰을 이용할 때는 session 사용을 종료해야 한다.
    return req.login(user, (loginError) => {
      if (loginError || !user) return next(loginError);
      else {
        // setUserToken(res, req.user);
        res.redirect('http://localhost:3000');
      }
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

// 카카오 간편 로그인
exports.getKakao = passport.authenticate('kakao');

(exports.getKakaoCallback = passport.authenticate('kakao', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: 'http://localhost:3000/login',
})),
  (req, res) => {
    setUserToken(res, req.user);
    res.redirect('/auth');
  };

// 구글 간편 로그인
exports.google = passport.authenticate('google');

// 네이버 간편 로그인

// 로그아웃
exports.logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.cookie('token', null, {
    maxAge: 0,
  });
  res.redirect('http://localhost:3000');
};
