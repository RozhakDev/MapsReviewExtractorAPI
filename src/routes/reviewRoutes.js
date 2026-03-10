const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { validateReviewRequest } = require('../middleware/validationMiddleware');

router.post('/reviews', validateReviewRequest, reviewController.getReviews);

module.exports = router;