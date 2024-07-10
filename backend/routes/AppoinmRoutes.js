// routes/appointmentRoutes.jsx
const express = require('express');
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require('../controller/appoinmentController.js');

const router = express.Router();

router.post('/appointments', createAppointment);
router.get('/appointments', getAppointments);
router.get('/appointments/:id', getAppointmentById);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);

module.exports = router;
