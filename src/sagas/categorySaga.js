import { call, put, takeEvery } from "redux-saga/effects";

// services
import categoryService from "../services/categoriesService";

// reducers
import * as categoryActions from "../reducers/categorySlice";

function* getAllCategories() {
  try {
    const response = yield call(categoryService.getCategories);

    if (response.status === 200) {
      yield put({
        type: categoryActions.fetchCategoriesSucess.type,
        payload: response.data.body.categories,
      });
    }
  } catch (error) {
    yield put({
      type: categoryActions.fetchCategoriesFailure.type,
      payload: error,
    });
  }
}

function* addCategory({ payload }) {
  try {
    const response = yield call(categoryService.postCategory, payload);

    if (response.status === 201) {
      yield put({
        type: categoryActions.addCategorySuccess.type,
        payload: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: categoryActions.addCategoryFailure.type,
      payload: error,
    });
  }
}

export default function* watchers() {
  yield takeEvery(categoryActions.fetchCategories.type, getAllCategories);
  yield takeEvery(categoryActions.addCategory.type, addCategory);
}
