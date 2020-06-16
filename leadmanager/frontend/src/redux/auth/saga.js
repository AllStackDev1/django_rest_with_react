import { call, fork, put, takeEvery } from "redux-saga/effects";
import * as Api from "./api";
import tokenConfig from "../../constants/tokenConfig";

import {
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOAD_USER_REQUEST,
  LOGOUT_REQUEST,
} from "../../constants/actionTypes";

import {
  userLoaded,
  authError,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  registerSuccess,
  registerFailed,
} from "./actions";
import { getErrors } from "../alert/actions";

//#region LOAD USER
function* loadUserRequest({ payload }) {
  try {
    const response = yield call(Api.loadUserAsync, tokenConfig(payload));
    yield put(userLoaded(response.data));
  } catch (error) {
    yield put(getErrors(error.response.data));
    yield put(authError());
  }
}
export function* watchLoadUserRequest() {
  yield takeEvery(LOAD_USER_REQUEST, loadUserRequest);
}
//#endregion

//#region LOGIN USER
function* loginRequest({ payload }) {
  try {
    const { username, password } = payload;
    const response = yield call(Api.loginAsync, username, password);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(getErrors(error.response.data));
    yield put(loginFailed());
  }
}
export function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginRequest);
}
//#endregion

//#region REGISTER USER
function* registerRequest({ payload }) {
  try {
    const response = yield call(Api.registerAsync, payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(getErrors(error.response.data));
    yield put(registerFailed());
  }
}
export function* watchRegisterRequest() {
  yield takeEvery(REGISTER_REQUEST, registerRequest);
}
//#endregion

//#region LOGOUT USER
function* logoutRequest({ payload }) {
  try {
    yield call(Api.logoutAsync, tokenConfig(payload));
    yield put(logoutSuccess());
  } catch (error) {
    yield put(getErrors(error.response.data));
  }
}
export function* watchLogoutRequest() {
  yield takeEvery(LOGOUT_REQUEST, logoutRequest);
}
//#endregion

const authSagas = [
  fork(watchLoadUserRequest),
  fork(watchLoginRequest),
  fork(watchRegisterRequest),
  fork(watchLogoutRequest),
];

export default authSagas;
