const { Router } = require('express');
const passport = require('../passport/index.js');
const router = Router();

// export kakao = passport.authenticate('kakao')
// router.get('/kakao', controller.kakao);
router.get('/kakao', passport.authenticate('kakao'));
router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/auth',
  }),
  (req, res) => {
    res.redirect('/auth');
  }
);

// router.get('/naver', authController.naver);
// router.get('/google', authController.google);

// 
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
