import { fork } from "redux-saga/effects";

// sagas
import authSaga from "./authSaga";
import categorySaga from "./categorySaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(categorySaga);
  yield fork(postSaga);
}
