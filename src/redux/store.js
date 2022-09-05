import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from '../redux/authSlice';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    filteredItems(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const filteredContacts = state.items.filter(
        contactEl => contactEl.id !== action.payload
      );
      return { ...state, items: filteredContacts };
    },
  },
});

export const { addContact, filteredItems, deleteContact } =
  counterSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};
const persistContactReducer = persistReducer(
  persistConfig,
  authSlice.reducer
  // counterSlice.reducer
);

export const store = configureStore({
  reducer: {
    myContacts: persistContactReducer,
    auth: authSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
