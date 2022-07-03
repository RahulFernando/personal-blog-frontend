import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertData: {
    success: true,
    message: null,
  },
};

const authSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.alertData.success = payload.success ? payload.success : true;
      state.alertData.message = payload.message;
    },
    resetAlert: (state) => {
      state.alertData = initialState.alertData;
    },
  },
});

const { actions, reducer } = authSlice;

export const { setAlert, resetAlert } = actions;

export default reducer;
