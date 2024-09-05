import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the user state
interface UserState {
  isSignedIn: boolean;
  user: {
    name: string;
    email: string;
    image: string;
  };
}

// Define the initial state using that type
const initialState: UserState = {
  isSignedIn: true,
  user: {
    name: '',
    email: '',
    image: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ name: string; email: string; image: string }>) => {
      state.isSignedIn = false;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.user = { name: '', email: '', image: '' };
    },
    updateUser: (state, action: PayloadAction<{ name?: string; email?: string; image?: string }>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { signIn, signOut, updateUser } = userSlice.actions;

export default userSlice.reducer;
