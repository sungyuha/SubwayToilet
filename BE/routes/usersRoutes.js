const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const usersControllers = require('../controller/usersControllers');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

router.get('/signup', usersControllers.getSignUP);
router.get('/login', usersControllers.getLogin);
router.get(
  '*',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    console.log(req.body);
    console.log('hi');
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      console.log('a', req.decoded);
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);
router.get('/userinfo');
// 아이디 찾기
router.get('/id/find');
// 비번 재설정 전 유저 확인
router.get('/pw/check');
// 비번 재설정
router.get('/pw/reset');

router.post(
  '/signup',
  [
    check('id').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').not().isEmpty(),
    check('name').not().isEmpty(),
  ],
  usersControllers.postSignUP
);

router.post('/id/find', usersControllers.postIdFind);
router.post('/pw/check');
router.post('/pw/reset');

// 회원 정보 수정
router.patch('/userinfo/edit');
// 회원 탈퇴
router.delete('/userinfo/delete');

module.exports = router;
