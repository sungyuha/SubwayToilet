const { Router } = require('express');
const router = Router();
const authController = require('../controller/authController');

router.post('/local', authController.postLocal);
router.get('/set', authController.setToken);
router.get('/kakao', authController.getKakao);
router.get('/kakao/callback', authController.getKakaoCallback);
router.get('/naver', authController.getNaver);
router.get('/naver/callback', authController.getNaverCallback);
router.get('/google', authController.getGoogle);
router.get('/google/callback', authController.getGoogleCallback);

router.get('/logout', authController.logout);

module.exports = router;
