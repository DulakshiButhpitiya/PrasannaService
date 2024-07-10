// src/actions/appointmentActions.js
import axios from 'axios';
import {
  APPOINTMENT_CREATE_REQUEST,
  APPOINTMENT_CREATE_SUCCESS,
  APPOINTMENT_CREATE_FAIL,
  APPOINTMENT_FETCH_REQUEST,
  APPOINTMENT_FETCH_SUCCESS,
  APPOINTMENT_FETCH_FAIL,
  APPOINTMENT_UPDATE_REQUEST,
  APPOINTMENT_UPDATE_SUCCESS,
  APPOINTMENT_UPDATE_FAIL,
  APPOINTMENT_DELETE_REQUEST,
  APPOINTMENT_DELETE_SUCCESS,
  APPOINTMENT_DELETE_FAIL,
} from '../constants/appointmentConstants';

// Create appointment
export const createAppointment = (appointmentData) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_CREATE_REQUEST });

    const { data } = await axios.post('http://localhost:4000/api/appointments', appointmentData);

    dispatch({ type: APPOINTMENT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Fetch appointments
export const fetchAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_FETCH_REQUEST });

    const { data } = await axios.get('http://localhost:4000/api/appointments');

    dispatch({ type: APPOINTMENT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_FETCH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Fetch single appointment by ID
export const fetchAppointmentById = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_FETCH_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/api/appointments/${id}`);

    dispatch({ type: APPOINTMENT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_FETCH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Update appointment
export const updateAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_UPDATE_REQUEST });

    const { data } = await axios.put(`http://localhost:4000/api/appointments/${id}`, appointmentData);

    dispatch({ type: APPOINTMENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Delete appointment
export const deleteAppointment = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_DELETE_REQUEST });

    await axios.delete(`http://localhost:4000/api/appointments/${id}`);

    dispatch({ type: APPOINTMENT_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
