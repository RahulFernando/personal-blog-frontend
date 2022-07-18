import { call, put, takeEvery } from "redux-saga/effects";

// services
import postService from "../services/postService";

// reducers
import * as postActions from "../reducers/postSlice";

function* getAllPosts({ payload }) {
  try {
    const response = yield call(postService.getPosts, payload);

    if (response.status === 200) {
      yield put({
        type: postActions.fetchPostsSucess.type,
        payload: response.data.body.posts,
      });
    }
  } catch (error) {
    yield put({
      type: postActions.fetchPostsFailure.type,
      payload: error,
    });
  }
}

function* addPost({ payload }) {
  try {
    const response = yield call(postService.addPost, payload);

    if (response.status === 201) {
      yield put({
        type: postActions.addPostSuccess.type,
        payload: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: postActions.addPostFailuer.type,
      payload: error,
    });
  }
}

function* deletePost({ payload }) {
  try {
    const response = yield call(postService.deletePost, payload);

    if (response.status === 200) {
      yield put({
        type: postActions.deletePostSuccess.type,
        payload: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: postActions.deletePostFailure.type,
      payload: error,
    });
  }
}

export default function* watchers() {
  yield takeEvery(postActions.fetchPosts.type, getAllPosts);
  yield takeEvery(postActions.addPost.type, addPost);
  yield takeEvery(postActions.deletePost.type, deletePost);
}
