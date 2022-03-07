import { createBrowserHistory } from 'history';
import { put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions, LogoutPayload } from './authSlice';

const history = createBrowserHistory();

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Baynv',
      })
    );

    payload.navigate('/admin');
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout(payload: LogoutPayload) {
  yield localStorage.removeItem('access_token');
  payload.navigate('/login');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    
    const action: PayloadAction<LoginPayload> = yield take(authActions.logout.type);
    yield call(handleLogout, action.payload);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
