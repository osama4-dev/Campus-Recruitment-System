import {
    SIGNUP,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    ROUT_GUARD
  } from "../constants";
  const initialState = {
    isUserSecureGuard: false,
    user: {},
    isLoading: false,
    isError: false,
    error: {}
  };
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case ROUT_GUARD:
        return {
          ...state,
          isUserSecureGuard: action.payload
        };
      case LOGIN:
      case SIGNUP:
      case LOGOUT:
        return {
          ...state,
          isLoading: true
        };
      case LOGIN_SUCCESS:
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
          isLogOut: false,
          isError: false
        };
      case LOGIN_FAILURE:
      case SIGNUP_FAILURE:
      case LOGOUT_FAILURE:
        alert(action.error.message);
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: action.error
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isUserSecureGuard: false,
          user: {},
          isLoading: false,
          isError: false,
          error: {}
        };
      default:
        return state;
    }
  }