import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchPostData: {
    loading: false,
    data: [],
    error: null,
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.fetchPostData.loading = true;
    },
    fetchPostsSucess: (state, { payload }) => {
      state.fetchPostData.loading = false;
      state.fetchPostData.data = payload;
      state.fetchPostData.error = null;
    },
    fetchPostsFailure: (state, { payload }) => {
      state.fetchPostData.loading = false;
      state.fetchPostData.data = [];
      state.fetchPostData.error = payload;
    },
  },
});

const { actions, reducer } = postSlice;

export const { fetchPosts, fetchPostsSucess, fetchPostsFailure } = actions;

export default reducer;
