import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: contactReducer,
    filters: filtersReducer,
  },
});