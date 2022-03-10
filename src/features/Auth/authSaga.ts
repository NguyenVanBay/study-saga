import { put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';
import {createBrowserHistory} from 'history'
function* handleLogin(payload: LoginPayload) {
  try {
    yield localStorage.setItem("access_token", "fake_token");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Baynv',
      })
    );
    console.log('go',localStorage.getItem('access_token'));
    
    
    const history = createBrowserHistory(); 
    history.push('/admin');
  } catch (error: any) {
    console.log('fail');
    
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  console.log('logout');
  
  yield localStorage.removeItem('access_token');
  const history = createBrowserHistory(); 
    yield history.push('/login');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
