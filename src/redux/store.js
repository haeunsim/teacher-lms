import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './reducers/sidebarReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    Auth: authReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;