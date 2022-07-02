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
    console.log(error)
    yield put({
      type: categoryActions.fetchCategoriesFailure.type,
      payload: error,
    });
  }
}

export default function* watchers() {
  yield takeEvery(categoryActions.fetchCategories.type, getAllCategories);
}
