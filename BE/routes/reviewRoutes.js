const { Router } = require('express');
const router = Router();
const passport = require('../passport/index.js');
const reviewControllers = require('../controller/reviewController');

router.get('*', passport.authenticate('jwt', {session:false}), 
  async (req,res,next) => {
    console.log("hi");
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
      next();
    } catch(error) {
      console.error(error);
      next(error);
    }
  }
);

router.post('/', reviewControllers.postReview);
router.patch('/', reviewControllers.patchReview);
router.delete('/', reviewControllers.deleteReview);

module.exports = router;
