import {
    ROUT_GUARD,
    SIGNUP,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
  } from "../constants";
  
  export default class AuthActions {
    static routGuardAction(data) {
      return {
        type: ROUT_GUARD,
        payload: data
      };
    }
    static login(data) {
      return {
        type: LOGIN,
        payload: data
      };
    }
  
    static loginSuccess(data) {
      return {
        type: LOGIN_SUCCESS,
        payload: data
      };
    }
    static loginFailure(error) {
      return {
        type: LOGIN_FAILURE,
        error: error
      };
    }
  
    static signup(data) {
      return {
        type: SIGNUP,
        payload: data
      };
    }
  
    static signupSuccess(data) {
      return {
        type: SIGNUP_SUCCESS,
        payload: data
      };
    }
  
    static signupFailure(error) {
      return {
        type: SIGNUP_FAILURE,
        error: error
      };
    }
  
    static logout(data) {
      return {
        type: LOGOUT,
        payload: data
      };
    }
  
    static logoutSuccess() {
      return {
        type: LOGOUT_SUCCESS
      };
    }
  
    static logoutFailure(error) {
      return {
        type: LOGOUT_FAILURE,
        error: error
      };
    }
  }