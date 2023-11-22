/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
// import isPreloadReducer from './isPreload/reducer';
// import talkDetailReducer from './talkDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    // isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    // talkDetail: talkDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
