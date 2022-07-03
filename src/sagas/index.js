import { fork } from "redux-saga/effects";

// sagas
import authSaga from "./authSaga";
import categorySaga from "./categorySaga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(categorySaga);
}
