import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchPostData: {
    loading: false,
    data: [],
    error: null,
  },
  addPostData: {
    loading: false,
    data: null,
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
    addPost: (state) => {
      state.addPostData.loading = true;
    },
    addPostSuccess: (state, { payload }) => {
      state.addPostData.loading = false;
      state.addPostData.data = payload;
      state.addPostData.error = null;
    },
    addPostFailuer: (state, { payload }) => {
      state.addPostData.loading = false;
      state.addPostData.data = null;
      state.addPostData.error = payload;
    },
    addPostReset: (state) => {
      state.addPostData = initialState.addPostData;
    },
  },
});

const { actions, reducer } = postSlice;

export const {
  fetchPosts,
  fetchPostsSucess,
  fetchPostsFailure,
  addPost,
  addPostSuccess,
  addPostFailuer,
  addPostReset,
} = actions;

export default reducer;
