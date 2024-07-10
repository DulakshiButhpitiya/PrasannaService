// src/reducers/FeedbackReducer.js
import {
    FEEDBACK_SUBMIT_REQUEST,
    FEEDBACK_SUBMIT_SUCCESS,
    FEEDBACK_SUBMIT_FAILURE,
    FEEDBACK_FETCH_REQUEST,
    FEEDBACK_FETCH_SUCCESS,
    FEEDBACK_FETCH_FAILURE,
    FEEDBACK_UPDATE_REQUEST,
    FEEDBACK_UPDATE_SUCCESS,
    FEEDBACK_UPDATE_FAILURE,
    FEEDBACK_DELETE_REQUEST,
    FEEDBACK_DELETE_SUCCESS,
    FEEDBACK_DELETE_FAILURE,
  } from '../constants/FeedbackConstants';
  
  export const feedbackSubmitReducer = (state = {}, action) => {
    switch (action.type) {
      case FEEDBACK_SUBMIT_REQUEST:
        return { loading: true };
      case FEEDBACK_SUBMIT_SUCCESS:
        return { loading: false, success: true, message: action.payload.message };
      case FEEDBACK_SUBMIT_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const feedbackFetchReducer = (state = { feedbacks: [] }, action) => {
    switch (action.type) {
      case FEEDBACK_FETCH_REQUEST:
        return { loading: true };
      case FEEDBACK_FETCH_SUCCESS:
        return { loading: false, feedbacks: action.payload };
      case FEEDBACK_FETCH_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const feedbackUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case FEEDBACK_UPDATE_REQUEST:
        return { loading: true };
      case FEEDBACK_UPDATE_SUCCESS:
        return { loading: false, success: true, feedback: action.payload };
      case FEEDBACK_UPDATE_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const feedbackDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case FEEDBACK_DELETE_REQUEST:
        return { loading: true };
      case FEEDBACK_DELETE_SUCCESS:
        return { loading: false, success: true, id: action.payload };
      case FEEDBACK_DELETE_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  