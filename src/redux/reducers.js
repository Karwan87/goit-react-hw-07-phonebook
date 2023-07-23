// old code
// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, setFilter } from './actions';

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// const filterReducer = createReducer('', {
//   [setFilter]: (state, action) => {
//     return action.payload;
//   },
// });

// export { contactsReducer, filterReducer };

// new code

import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
