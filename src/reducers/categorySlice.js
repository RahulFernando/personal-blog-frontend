import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchCategoryData: {
    loading: false,
    data: [],
    error: null,
  },
  addCategoryData: {
    loading: false,
    data: null,
    error: null,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategories: (state) => {
      state.fetchCategoryData.loading = true;
    },
    fetchCategoriesSucess: (state, { payload }) => {
      state.fetchCategoryData.loading = false;
      state.fetchCategoryData.data = payload;
      state.fetchCategoryData.error = null;
    },
    fetchCategoriesFailure: (state, { payload }) => {
      state.fetchCategoryData.loading = false;
      state.fetchCategoryData.data = [];
      state.fetchCategoryData.error = payload;
    },
    addCategory: (state) => {
      state.addCategoryData.loading = true;
    },
    addCategorySuccess: (state, { payload }) => {
      state.addCategoryData.loading = false;
      state.addCategoryData.data = payload;
      state.addCategoryData.error = null;
    },
    addCategoryFailure: (state, { payload }) => {
      state.addCategoryData.loading = false;
      state.addCategoryData.data = null;
      state.addCategoryData.error = payload;
    },
    addCategoryReset: (state) => {
      state.addCategoryData = initialState.addCategoryData;
    },
  },
});

const { actions, reducer } = categorySlice;

export const {
  fetchCategories,
  fetchCategoriesSucess,
  fetchCategoriesFailure,
  addCategory,
  addCategorySuccess,
  addCategoryFailure,
  addCategoryReset,
} = actions;

export default reducer;
