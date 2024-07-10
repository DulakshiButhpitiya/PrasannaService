// controllers/FeedbackController.js
const Feedback = require('../Models/FeedbackModel');

exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(200).json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ success: false, message: 'Error submitting feedback. Please try again later.' });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    res.status(500).json({ success: false, message: 'Error fetching feedbacks. Please try again later.' });
  }
};

exports.updateFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, message } = req.body;
    const updatedFeedback = await Feedback.findByIdAndUpdate(id, { name, email, message }, { new: true });
    res.status(200).json(updatedFeedback);
  } catch (error) {
    console.error('Error updating feedback:', error);
    res.status(500).json({ success: false, message: 'Error updating feedback. Please try again later.' });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Feedback deleted successfully!' });
  } catch (error) {
    console.error('Error deleting feedback:', error);
    res.status(500).json({ success: false, message: 'Error deleting feedback. Please try again later.' });
  }
};
