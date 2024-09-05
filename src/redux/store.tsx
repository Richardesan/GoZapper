import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import userReducer from './userInfo';  // Import the user reducer

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,  // Add the user reducer to the store
  },
});

// Define the RootState type
