// backend/routes/sendEmail.js

const express = require('express');
const sendEmail = require('../emailService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    // Send email
    await sendEmail(to, subject, text);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;
