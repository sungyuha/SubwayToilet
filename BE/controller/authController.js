const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

// 토큰 생성
function setUserToken(user) {
  const token = jwt.sign({ user }, process.env.TOKEN, {
    expiresIn: '10m',
  });
  console.log('token : ',token);
  return token;
}

// 로컬 로그인
exports.postLocal = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    // local의 done함수..
    console.log('1 : ',authError);
    console.log('2 : ',user);
    console.log('3 : ',info);
    if (authError) return next(authError);
    if (user) return res.send(`${setUserToken(user)}`);
    // jwt 토큰을 이용할 때는 session 사용을 종료해야 한다.
    // return req.login(user,(loginError) => {
    //   if (loginError || !user) return next(loginError);
    //   else {
    //     setUserToken(res, req.user);
        
    //   }
    // });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

// 카카오 간편 로그인
exports.getKakao = passport.authenticate('kakao');

(exports.getKakaoCallback = passport.authenticate('kakao', {
  successRedirect: "/auth/set",
  failureRedirect: 'http://localhost:3000/login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect("/auth/set");
  };
exports.setToken = (req,res) => {
  res.redirect("http://localhost:3000?token=" + setUserToken(req.user));
}

// 구글 간편 로그인
exports.getGoogle = passport.authenticate('google',{scope: ['profile','email']});

(exports.getGoogleCallback = passport.authenticate('google',{
  successRedirect: "/auth/set",
  failureRedirect: 'http://localhost:3000/login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect("/auth/set");
  };
exports.setToken = (req,res) => {
  res.redirect("http://localhost:3000?token=" + setUserToken(req.user));
}


// 네이버 간편 로그인
exports.getNaver = passport.authenticate('naver');

(exports.getNaverCallback = passport.authenticate('naver',{
  successRedirect: "/auth/set",
  failureRedirect: 'http://localhost:3000/login',
  failureFlash: true,
})),
  (req, res) => {
    res.redirect("/auth/set");
  };
exports.setToken = (req,res) => {
  res.redirect("http://localhost:3000?token=" + setUserToken(req.user));
}

// 로그아웃
exports.logout = (req, res) => {
  // req.logout();
  console.log( 'logout' );
  req.session.destroy();
  console.log( req.session );
  res.cookie('token', null, {
    maxAge: 0,
  });
  res.redirect('http://localhost:3000');
};
