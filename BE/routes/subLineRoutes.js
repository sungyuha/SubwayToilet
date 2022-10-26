const { Router } = require('express');
const router = Router();

// const subLineControllers = require('../controller/subLinesControllers');

router.get('/');
router.get('/line');
router.get('/line/station');

module.exports = router;
