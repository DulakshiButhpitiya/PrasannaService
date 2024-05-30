import axios from 'axios';
import {
  SPAREPARTS_LIST_REQUEST,
  SPAREPARTS_LIST_SUCCESS,
  SPAREPARTS_LIST_FAIL,
  SPAREPARTS_DETAILS_REQUEST,
  SPAREPARTS_DETAILS_SUCCESS,
  SPAREPARTS_DETAILS_FAIL,
  SPAREPARTS_CREATE_REQUEST,
  SPAREPARTS_CREATE_SUCCESS,
  SPAREPARTS_CREATE_FAIL,
  SPAREPARTS_UPDATE_REQUEST,
  SPAREPARTS_UPDATE_SUCCESS,
  SPAREPARTS_UPDATE_FAIL,
  SPAREPARTS_DELETE_REQUEST,
  SPAREPARTS_DELETE_SUCCESS,
  SPAREPARTS_DELETE_FAIL
} from './sparepartsConstants';

// Fetch all spare parts
export const listSpareParts = () => async (dispatch) => {
  try {
    dispatch({ type: SPAREPARTS_LIST_REQUEST });

    const { data } = await axios.get('/api/spareparts');

    dispatch({
      type: SPAREPARTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPAREPARTS_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Fetch a single spare part by ID
export const getSparePartDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPAREPARTS_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/spareparts/${id}`);

    dispatch({
      type: SPAREPARTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPAREPARTS_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Create a new spare part
export const createSparePart = (sparePart) => async (dispatch) => {
  try {
    dispatch({ type: SPAREPARTS_CREATE_REQUEST });

    const { data } = await axios.post('/api/spareparts', sparePart);

    dispatch({
      type: SPAREPARTS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPAREPARTS_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Update an existing spare part
export const updateSparePart = (id, sparePart) => async (dispatch) => {
  try {
    dispatch({ type: SPAREPARTS_UPDATE_REQUEST });

    const { data } = await axios.put(`/api/spareparts/${id}`, sparePart);

    dispatch({
      type: SPAREPARTS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPAREPARTS_UPDATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Delete a spare part
export const deleteSparePart = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPAREPARTS_DELETE_REQUEST });

    await axios.delete(`/api/spareparts/${id}`);

    dispatch({ type: SPAREPARTS_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SPAREPARTS_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
