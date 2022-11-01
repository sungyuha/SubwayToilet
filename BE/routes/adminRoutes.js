const { Router } = require('express');
const router = Router();
const passport = require('../passport/index.js');
const adminController = require('../controller/adminController');


router.get('/', adminController.getAdmin);
router.get('/lines', adminController.getLines);

module.exports = router;
