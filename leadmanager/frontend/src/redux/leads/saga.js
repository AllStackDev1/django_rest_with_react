import { call, fork, put, takeEvery } from "redux-saga/effects";
import * as Api from "./api";
import tokenConfig from "../../constants/tokenConfig";

import {
  ADD_LEAD_REQUEST,
  GET_LEADS_REQUEST,
  DELETE_LEAD_REQUEST,
} from "../../constants/actionTypes";

import { addLeadSuccess, getLeadsSuccess } from "./actions";
import { createMessage, getErrors } from "../alert/actions";

//#region ADD LEAD
function* addLeadsRequest({ payload }) {
  try {
    const response = yield call(
      Api.addLeadsAsync,
      payload.lead,
      tokenConfig(payload.token)
    );
    yield put(addLeadSuccess(response.data));
    yield put(createMessage("Record created successfully"));
  } catch (error) {
    yield put(getErrors(error.response.data));
  }
}
export function* watchAddLeadsRequest() {
  yield takeEvery(ADD_LEAD_REQUEST, addLeadsRequest);
}
//#endregion

//#region GET LEADS
function* getLeadsRequest({ payload }) {
  try {
    const response = yield call(Api.getLeadsAsync, tokenConfig(payload));
    yield put(getLeadsSuccess(response.data));
  } catch (error) {
    yield put(getErrors(error.response.data));
  }
}
export function* watchGetLeadsRequest() {
  yield takeEvery(GET_LEADS_REQUEST, getLeadsRequest);
}
//#endregion

//#region DELETE LEAD
function* deleteLeadsRequest({ payload }) {
  try {
    yield call(Api.deleteLeadsAsync, payload.id, tokenConfig(payload.token));
    yield put(createMessage("Record deleted successfully"));
  } catch (error) {
    yield put(getErrors(error.response.data));
  }
}
export function* watchDeleteLeadsRequest() {
  yield takeEvery(DELETE_LEAD_REQUEST, deleteLeadsRequest);
}
//#endregion

const leadSagas = [
  fork(watchAddLeadsRequest),
  fork(watchGetLeadsRequest),
  fork(watchDeleteLeadsRequest),
];

export default leadSagas;
