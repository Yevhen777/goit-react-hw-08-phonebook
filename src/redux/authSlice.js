import { createSlice } from '@reduxjs/toolkit';
import { register } from './requestUser';
import { logIn } from './requestUser';
import { logOut } from './requestUser';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    logginIn: false,
    // isRefresshinhUser: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.logginIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.logginIn = true;
    },
    // [logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.logginIn = false;
    // },
  },
});
