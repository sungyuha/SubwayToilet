const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

// 토큰 생성
function setUserToken(user) {
  const token = jwt.sign({ user }, process.env.TOKEN, {
    expiresIn: '10m',
  });
  console.log('token : ', token);
  return token;
}

// 로컬 로그인
exports.postLocal = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) return next(authError);
    if (user) return res.send(`${setUserToken(user)}`);
  })(req, res, next);
};

// 카카오 간편 로그인
exports.getKakao = passport.authenticate('kakao');

(exports.getKakaoCallback = passport.authenticate('kakao', {
  successRedirect: '/auth/set',
  failureRedirect: process.env.FEIP + 'login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect('/auth/set');
  };
exports.setToken = (req, res) => {
  res.redirect(process.env.FEIP +'?token=' + setUserToken(req.user));
};

// 구글 간편 로그인
exports.getGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

(exports.getGoogleCallback = passport.authenticate('google', {
  successRedirect: '/auth/set',
  failureRedirect: process.env.FEIP +'/login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect('/auth/set');
  };
exports.setToken = (req, res) => {
  res.redirect(process.env.FEIP +'?token=' + setUserToken(req.user));
};

// 네이버 간편 로그인
exports.getNaver = passport.authenticate('naver');

(exports.getNaverCallback = passport.authenticate('naver', {
  successRedirect: '/auth/set',
  failureRedirect: process.env.FEIP +'/login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect('/auth/set');
  };
exports.setToken = (req, res) => {
  res.redirect(process.env.FEIP +'?token=' + setUserToken(req.user));
};

// 로그아웃
exports.logout = (req, res) => {
  // req.logout();
  console.log('logout');
  req.session.destroy();
  console.log(req.session);
  res.cookie('token', null, {
    maxAge: 0,
  });
  res.redirect(process.env.FEIP);
};
