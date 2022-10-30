const { Router } = require('express');
const router = Router();

const toiletControllers = require('../controller/toiletController');

router.get('/', toiletControllers.getToiletInfo);

module.exports = router;
