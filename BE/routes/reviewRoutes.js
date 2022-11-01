const { Router } = require('express');
const router = Router();
const reviewControllers = require('../controller/reviewController');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    console.log(req.body);
    console.log('hi');
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      console.log('a', req.decoded);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  reviewControllers.postReview
);
router.patch(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    console.log(req.body);
    console.log('hi');
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      console.log('a', req.decoded);
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  reviewControllers.patchReview
);
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    console.log(req.body);
    console.log('hi');
    // console.log(req)
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      console.log('a', req.decoded);
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  reviewControllers.deleteReview
);

module.exports = router;
