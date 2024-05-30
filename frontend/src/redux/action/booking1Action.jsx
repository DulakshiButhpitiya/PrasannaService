import axios from 'axios';
import {
  CREATE_BOOKING,
  GET_BOOKINGS,
  GET_BOOKING_BY_ID,
  UPDATE_BOOKING,
  DELETE_BOOKING
} from '../constants/booking1Constants';

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/bookings', bookingData);
    dispatch({ type: CREATE_BOOKING, payload: data });
  } catch (error) {
    console.error('Error creating booking:', error);
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/bookings');
    dispatch({ type: GET_BOOKINGS, payload: data });
  } catch (error) {
    console.error('Error fetching bookings:', error);
  }
};

export const getBookingById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/bookings/${id}`);
    dispatch({ type: GET_BOOKING_BY_ID, payload: data });
  } catch (error) {
    console.error('Error fetching booking by ID:', error);
  }
};

export const updateBooking = (id, bookingData) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/bookings/${id}`, bookingData);
    dispatch({ type: UPDATE_BOOKING, payload: data });
  } catch (error) {
    console.error('Error updating booking:', error);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/bookings/${id}`);
    dispatch({ type: DELETE_BOOKING, payload: id });
  } catch (error) {
    console.error('Error deleting booking:', error);
  }
};
