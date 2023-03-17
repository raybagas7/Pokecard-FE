import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authedUser: null,
  },
  reducers: {
    fillAuthedUserData(state, action) {
      state.authedUser = action.payload;
    },

    emptyAuthedUserData(state) {
      state.authedUser = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
