import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import leadSagas from "./leads/saga";

export default function* rootSaga(getState) {
  yield all([...auth, ...leadSagas]);
}
