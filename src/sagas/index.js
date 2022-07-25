import { fork } from "redux-saga/effects";

// sagas
import authSaga from "./authSaga";
import categorySaga from "./categorySaga";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(categorySaga);
  yield fork(postSaga);
  yield fork(commentSaga);
}
