// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userReducerSignUp,
  userReducerSignIn,
  userUpdateReducer,
  userDeleteReducer,
  feedbackReducer,
} from './frontend/src/redux/reducer/UserReducer';

const reducer = combineReducers({
  userSignUp: userReducerSignUp,
  userSignIn: userReducerSignIn,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  feedback: feedbackReducer,
  // other reducers
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
