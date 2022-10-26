const { Router } = require('express');
const router = Router();
const usersControllers = require('../controller/usersControllers');

router.get('/signup', usersControllers.getSignUP);
router.get('/login', usersControllers.getLogin);
router.get('/userinfo');
router.get('/forgotId');
router.get('/forgotPwd');
router.get('/forgotPwd');

router.post('/signup', usersControllers.postSignUP);
router.post('/login', usersControllers.postLogin);
router.post('/userinfo/edit');
router.post('/userinfo/delete');
router.post('/forgotId');
router.post('/forgotPwd');

module.exports = router;
