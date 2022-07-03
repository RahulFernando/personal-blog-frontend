import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerData: {
    loading: false,
    data: null,
    error: null,
  },
  loginData: {
    loading: false,
    data: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    register: (state) => {
      state.registerData.loading = true;
    },
    registerSucess: (state, { payload }) => {
      state.registerData.loading = false;
      state.registerData.data = payload;
      state.registerData.error = null;
    },
    registerFailure: (state, { payload }) => {
      state.registerData.loading = false;
      state.registerData.data = null;
      state.registerData.error = payload;
    },
    registerReset: (state) => {
      state.registerData = initialState.registerData;
    },
    login: (state) => {
      state.loginData.loading = true;
    },
    loginSucess: (state, { payload }) => {
      state.loginData.loading = false;
      state.loginData.data = payload;
      state.loginData.error = null;
    },
    loginFailure: (state, { payload }) => {
      state.loginData.loading = false;
      state.loginData.data = null;
      state.loginData.error = payload;
    },
    loginReset: (state) => {
      state.loginData = initialState.loginData;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  register,
  registerSucess,
  registerFailure,
  login,
  loginSucess,
  loginFailure,
  registerReset,
  loginReset,
} = actions;

export default reducer;
