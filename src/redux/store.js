import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
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
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// import { logIn } from '../redux/requestUser';

// export const counterSlice = createSlice({
//   name: 'user',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     filteredItems(state, action) {
//       state.filter = action.payload;
//     },
//     deleteContact(state, action) {
//       const filteredContacts = state.items.filter(
//         contactEl => contactEl.id !== action.payload
//       );
//       return { ...state, items: filteredContacts };
//     },
//   },
// });

// export const { addContact, filteredItems, deleteContact } =
//   counterSlice.actions;

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: `/contacts` }),
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: value => ({
        url: `/contacts`,
        method: 'POST',
        data: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(contactsApi.middleware),
// });

// export const {
//   useGetContactsQuery,
//   useCreateContactMutation,
//   useDeleteContactMutation,
// } = contactsApi;

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,

    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const persistor = persistStore(store);
