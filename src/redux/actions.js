// old code
// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const setFilter = createAction('filter/setFilter');

//new code

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../api';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  fetchContacts
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const newContact = await addContact(contact);
    return newContact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContact(id);
    return id;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
