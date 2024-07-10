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

export const sparePartsListReducer = (state = { spareParts: [] }, action) => {
  switch (action.type) {
    case SPAREPARTS_LIST_REQUEST:
      return { loading: true, spareParts: [] };
    case SPAREPARTS_LIST_SUCCESS:
      return { loading: false, spareParts: action.payload };
    case SPAREPARTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sparePartDetailsReducer = (state = { sparePart: {} }, action) => {
  switch (action.type) {
    case SPAREPARTS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SPAREPARTS_DETAILS_SUCCESS:
      return { loading: false, sparePart: action.payload };
    case SPAREPARTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sparePartCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SPAREPARTS_CREATE_REQUEST:
      return { loading: true };
    case SPAREPARTS_CREATE_SUCCESS:
      return { loading: false, success: true, sparePart: action.payload };
    case SPAREPARTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sparePartUpdateReducer = (state = { sparePart: {} }, action) => {
  switch (action.type) {
    case SPAREPARTS_UPDATE_REQUEST:
      return { loading: true };
    case SPAREPARTS_UPDATE_SUCCESS:
      return { loading: false, success: true, sparePart: action.payload };
    case SPAREPARTS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sparePartDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SPAREPARTS_DELETE_REQUEST:
      return { loading: true };
    case SPAREPARTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SPAREPARTS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
