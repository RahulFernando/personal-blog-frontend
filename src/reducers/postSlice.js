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
  deletePostData: {
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
    deletePost: (state) => {
      state.deletePostData.loading = true;
    },
    deletePostSuccess: (state, { payload }) => {
      state.deletePostData.loading = false;
      state.deletePostData.data = payload;
      state.deletePostData.error = null;
    },
    deletePostFailure: (state, { payload }) => {
      state.deletePostData.loading = false;
      state.deletePostData.data = null;
      state.deletePostData.error = payload;
    },
    deletePostReset: (state) => {
      state.deletePostData = initialState.deletePostData;
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
  deletePost,
  deletePostSuccess,
  deletePostFailure,
  deletePostReset,
} = actions;

export default reducer;
