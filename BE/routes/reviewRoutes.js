const { Router } = require('express');
const router = Router();
const reviewControllers = require('../controller/reviewController');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

// router.post(
//   '*',
//   passport.authenticate('jwt', { session: false }),
//   (req, res, next) => {
//     console.log(req)
//     try {
//       req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
//       console.log('a', req.decoded);
//       next();
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
//   },
// );
router.get('/', reviewControllers.getReview);

router.get('/', reviewControllers.getReview);

router.post('/',reviewControllers.postReview)

router.patch('/',reviewControllers.patchReview
);
router.delete('/', reviewControllers.deleteReview
);

module.exports = router;
