import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../model/user';

export interface AuthState {
  isLoggedIn: boolean,
  logging?: boolean,
  currentUser?: User
}

export interface LoginPayload {
  username: string;
  password: string;
  navigate: Function;
}

export interface LogoutPayload {
  navigate: Function;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },

    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state, action: PayloadAction<LogoutPayload>) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    }
  }
});

// Actions
export const authActions = authSlice.actions;

// Recucer
const authReducer = authSlice.reducer;

export default authReducer;