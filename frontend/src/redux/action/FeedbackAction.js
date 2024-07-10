// src/actions/FeedbackActions.js
import axios from 'axios';
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

export const submitFeedback = (name, email, message) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_SUBMIT_REQUEST });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post('/api/feedback', { name, email, message }, config);
    dispatch({ type: FEEDBACK_SUBMIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEEDBACK_SUBMIT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const fetchFeedback = () => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_FETCH_REQUEST });
    const { data } = await axios.get('/api/feedback');
    dispatch({ type: FEEDBACK_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEEDBACK_FETCH_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateFeedback = (id, feedback) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_UPDATE_REQUEST });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.put(`/api/feedback/${id}`, feedback, config);
    dispatch({ type: FEEDBACK_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEEDBACK_UPDATE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const deleteFeedback = (id) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_DELETE_REQUEST });
    await axios.delete(`/api/feedback/${id}`);
    dispatch({ type: FEEDBACK_DELETE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: FEEDBACK_DELETE_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
