import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addCommentData: {
    loading: false,
    data: null,
    error: null,
  },
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state) => {
      state.addCommentData.loading = true;
    },
    addCommentSucess: (state, { payload }) => {
      state.addCommentData.loading = false;
      state.addCommentData.data = payload;
      state.addCommentData.error = null;
    },
    addCommentFailure: (state, { payload }) => {
      state.addCommentData.loading = false;
      state.addCommentData.data = [];
      state.addCommentData.error = payload;
    },
  },
});

const { actions, reducer } = commentSlice;

export const { addComment, addCommentSucess, addCommentFailure } = actions;

export default reducer;
