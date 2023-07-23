// old code
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducers';

// export default configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

// new code

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
