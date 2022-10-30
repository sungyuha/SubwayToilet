const { Router } = require('express');
const router = Router();
const authController = require('../controller/authController');

router.get('/kakao', authController.getKakao);
router.get('/kakao/callback', authController.getKakaoCallback);
router.post('/local', authController.postLocal);

// router.get('/naver', authController.naver);
// router.get('/google', authController.google);

//
router.get('/logout', authController.logout);

module.exports = router;
