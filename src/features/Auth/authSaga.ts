import { put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Baynv',
      })
    );
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
