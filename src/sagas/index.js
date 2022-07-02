import { fork } from "redux-saga/effects";

// sagas
import categorySaga from "./categorySaga";

export default function* rootSaga() {
  yield fork(categorySaga);
}
