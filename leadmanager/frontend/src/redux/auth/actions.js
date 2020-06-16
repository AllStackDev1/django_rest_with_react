import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOAD_USER_REQUEST,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../../constants/actionTypes";

export const registerRequest = (user) => ({
  type: REGISTER_REQUEST,
  payload: user,
});
export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});
export const registerFailed = (errors) => ({
  type: REGISTER_FAILED,
  payload: errors,
});

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
});
export const loginSuccess = (auth) => ({
  type: LOGIN_SUCCESS,
  payload: auth,
});
export const loginFailed = (errors) => ({
  type: LOGIN_FAILED,
  payload: errors,
});

export const loadUserRequest = (token) => ({
  type: LOAD_USER_REQUEST,
  payload: token,
});
export const userLoaded = (user) => ({
  type: USER_LOADED,
  payload: user,
});
export const authError = () => ({
  type: AUTH_ERROR,
});

export const logoutRequest = (token) => ({
  type: LOGOUT_REQUEST,
  payload: token,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
