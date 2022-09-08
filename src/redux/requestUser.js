import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/signup',
      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk('auth/register', async () => {
  try {
    await axios.post('https://connections-api.herokuapp.com/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
