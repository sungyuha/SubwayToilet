const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const usersControllers = require('../controller/usersControllers');

router.get('/signup', usersControllers.getSignUP);

router.get('/login', usersControllers.getLogin);

router.get('/userinfo', usersControllers.getUserInfo);

// 아이디 찾기
router.get('/id/find', usersControllers.getIdFind);

// 비번 재설정 전 유저 확인
router.get('/pw/check', usersControllers.getPwCheck);

// 비번 재설정
router.get('/pw/reset', usersControllers.getPwReset);

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
router.post('/pw/check', usersControllers.postPwCheck);
router.post('/pw/reset', usersControllers.postPwReset);

// 회원 정보 수정
router.put('/userinfo/edit', usersControllers.patchUserInfo);
// 회원 탈퇴
router.delete('/userinfo/delete', usersControllers.deleteUser);

module.exports = router;
