import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fetchCategoryData: {
        loading: false,
        data: [],
        error: null
    },
};

const categorySlice = createSlice({
    name: 'category',
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
        }
    }
});

const { actions, reducer } = categorySlice;

export const { fetchCategories, fetchCategoriesSucess, fetchCategoriesFailure } = actions;

export default reducer;