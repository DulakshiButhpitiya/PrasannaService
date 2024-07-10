// src/reducers/appointmentReducer.js
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
  
  export const appointmentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_CREATE_REQUEST:
        return { loading: true };
      case APPOINTMENT_CREATE_SUCCESS:
        return { loading: false, success: true, appointment: action.payload };
      case APPOINTMENT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const appointmentListReducer = (state = { appointments: [] }, action) => {
    switch (action.type) {
      case APPOINTMENT_FETCH_REQUEST:
        return { loading: true, appointments: [] };
      case APPOINTMENT_FETCH_SUCCESS:
        return { loading: false, appointments: action.payload };
      case APPOINTMENT_FETCH_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const appointmentDetailsReducer = (state = { appointment: {} }, action) => {
    switch (action.type) {
      case APPOINTMENT_FETCH_REQUEST:
        return { ...state, loading: true };
      case APPOINTMENT_FETCH_SUCCESS:
        return { loading: false, appointment: action.payload };
      case APPOINTMENT_FETCH_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const appointmentUpdateReducer = (state = { appointment: {} }, action) => {
    switch (action.type) {
      case APPOINTMENT_UPDATE_REQUEST:
        return { loading: true };
      case APPOINTMENT_UPDATE_SUCCESS:
        return { loading: false, success: true, appointment: action.payload };
      case APPOINTMENT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const appointmentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case APPOINTMENT_DELETE_REQUEST:
        return { loading: true };
      case APPOINTMENT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case APPOINTMENT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  