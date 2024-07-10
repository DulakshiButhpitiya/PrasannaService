// models/appointmentModel.jsx
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Email is invalid.'],
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Contact number must be 10 digits.'],
  },
  bikeModel: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
  },
  selectedTimeSlot: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
