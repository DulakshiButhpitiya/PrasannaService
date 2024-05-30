const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  file: { type: String, required: true },
  bikeModel: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  mileage: { type: String, required: true },
  serviceType: { type: String, required: true },
  additionalInfo: { type: String },
  termsAgreed: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
