const { Router } = require('express');
const router = Router();
const adminController = require('../controller/adminController');

router.get('/', adminController.getAdmin);
router.get('/lines', adminController.getLines);

module.exports = router;
