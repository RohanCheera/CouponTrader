import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import couponReducer from '../slices/couponSlice';
import uiReducer from '../slices/uiSlice';

const preloadedState = {
  auth: {
    token: localStorage.getItem('token') || null,
    user: null,
    isLoggedIn: !!localStorage.getItem('token'),
    username: '',
    loading: false,
    error: null,
  },
  coupons: {
    available: [],
    viewedCoupon: null,
  },
  ui: {
    isCouponViewerOpen: false,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    coupons: couponReducer,
    ui: uiReducer,
  },
  preloadedState,
});

export default store;
