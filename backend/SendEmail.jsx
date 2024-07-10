// backend/emailService.js

const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Your Gmail email address
    pass: 'your_password' // Your Gmail password or app-specific password if using 2FA
  }
});

// Function to send email
const SendEmail = async (to, subject, text) => {
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'your_email@gmail.com',
      to,
      subject,
      text
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = SendEmail;
