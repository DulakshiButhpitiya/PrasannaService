import {
    CREATE_BOOKING,
    GET_BOOKINGS,
    GET_BOOKING_BY_ID,
    UPDATE_BOOKING,
    DELETE_BOOKING
  } from '../constants/booking1Constants';
  
  const initialState = {
    bookings: [],
    booking: {},
    loading: true
  };
  
  export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOOKING:
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
          loading: false
        };
      case GET_BOOKINGS:
        return {
          ...state,
          bookings: action.payload,
          loading: false
        };
      case GET_BOOKING_BY_ID:
        return {
          ...state,
          booking: action.payload,
          loading: false
        };
      case UPDATE_BOOKING:
        return {
          ...state,
          bookings: state.bookings.map((booking) =>
            booking._id === action.payload._id ? action.payload : booking
          ),
          loading: false
        };
      case DELETE_BOOKING:
        return {
          ...state,
          bookings: state.bookings.filter((booking) => booking._id !== action.payload),
          loading: false
        };
      default:
        return state;
    }
  };
  