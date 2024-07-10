// routes/FeedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/FeedbackController');

// Create new feedback
router.post('/', feedbackController.submitFeedback);

// Get all feedbacks
router.get('/', feedbackController.getFeedbacks);

// Update feedback by ID
router.put('/:id', feedbackController.updateFeedback);

// Delete feedback by ID
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
