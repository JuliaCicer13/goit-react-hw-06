import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
   
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
