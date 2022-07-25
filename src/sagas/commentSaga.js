import { call, put, takeEvery } from "redux-saga/effects";

// services
import categoryService from "../services/commentService";

// reducers
import * as commentActions from "../reducers/commentSlice";
import * as uiActions from "../reducers/uiSlice";

function* addComment({ payload }) {
  try {
    const response = yield call(categoryService.posComments, payload.id, {
      content: payload.content,
    });

    if (response.status === 201) {
      yield put({
        type: commentActions.addCommentSucess.type,
        payload: response.data.body.comment,
      });
      yield put({
        type: uiActions.setAlert.type,
        payload: { message: response.data.message },
      });
    }
  } catch (error) {
    yield put({
      type: commentActions.addCommentFailure.type,
      payload: error,
    });
    yield put({
      type: uiActions.setAlert.type,
      payload: { message: error, success: false },
    });
  }
}

export default function* watchers() {
  yield takeEvery(commentActions.addComment.type, addComment);
}
