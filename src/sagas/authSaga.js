import { call, put, takeEvery } from "redux-saga/effects";

// services
import authService from "../services/authService";

// reducers
import * as authActions from "../reducers/authSlice";

function* userRegister({ payload }) {
  try {
    const response = yield call(authService.postSignUp, payload);

    if (response.status === 201) {
      yield put({
        type: authActions.registerSucess.type,
        payload: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: authActions.registerFailure.type,
      payload: error,
    });
  }
}

function* userLogin({ payload }) {
  try {
    const response = yield call(authService.postSignIn, payload);

    if (response.status === 200) {
      yield put({
        type: authActions.loginSucess.type,
        payload: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: authActions.loginFailure.type,
      payload: error,
    });
  }
}

export default function* watchers() {
  yield takeEvery(authActions.register.type, userRegister);
  yield takeEvery(authActions.login.type, userLogin);
}
