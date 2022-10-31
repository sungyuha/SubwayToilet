const { Router } = require('express');
const router = Router();
const passport = require('../passport/index.js');
const adminController = require('../controller/adminController');

router.get('/', passport.authenticate('jwt', {session:false}), adminController.getAdmin);
router.get('/lines', adminController.getLines);

module.exports = router;
