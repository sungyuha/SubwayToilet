const { Router } = require('express');
const router = Router();
const reviewControllers = require('../controller/reviewController');

router.get('/', reviewControllers.getReview);

router.get('/myReview', reviewControllers.getMyReview);

router.post('/', reviewControllers.postReview);

router.patch('/', reviewControllers.patchReview);

router.delete('/', reviewControllers.deleteReview);

module.exports = router;
