const { Router } = require('express');
const router = Router();
const passport = require('../passport/index.js');
const adminController = require('../controller/adminController');

router.get(
  '*',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    console.log(req.body);
    console.log('hi');
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.Authorization, process.env.TOKEN);
      if(req.decoded==='admin')
        console.log('a', req.decoded);
        next();
    } catch (error) {
      console.log('a');
      console.log(error);
      // next(error);
    }
  }
);
router.get('/', adminController.getAdmin);
router.get('/lines', adminController.getLines);

module.exports = router;
