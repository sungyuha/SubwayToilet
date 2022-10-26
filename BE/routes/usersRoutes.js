const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const usersControllers = require('../controller/usersControllers');

router.get('/signup', usersControllers.getSignUP);
router.get('/login', usersControllers.getLogin);
router.get('/userinfo');
router.get('/forgotId');
router.get('/forgotPwd');
router.get('/forgotPwd');

router.post('/signup',[check('id').not().isEmpty(), check('email').normalizeEmail().isEmail(), check('password').not().isEmpty(), check('name').not().isEmpty()] ,usersControllers.postSignUP);
router.post('/login', [check('id').not().isEmpty(), check('password').not().isEmpty()] ,usersControllers.postLogin);
router.post('/userinfo/edit');
router.post('/userinfo/delete');
router.post('/forgotId');
router.post('/forgotPwd');

module.exports = router;
