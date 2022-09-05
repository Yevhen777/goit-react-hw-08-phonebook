import { createSlice } from '@reduxjs/toolkit';

import { register } from './requestUser';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    logginIn: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.logginIn = true;
    },
  },
});
