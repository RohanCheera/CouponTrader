import { createSlice } from '@reduxjs/toolkit';
import {fetchActiveCoupons} from '../thunks/couponThunks'

const initialState = {
  available: [],
  viewedCoupon: null,
  activeCoupons: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null

};

const couponSlice = createSlice({
  name: 'coupons',
  initialState,
  reducers: {
    addCoupon(state, action) {
      state.available.push(action.payload);
    },
    viewCoupon(state, action) {
      state.viewedCoupon = action.payload;
    },
    removeCoupon(state, action) {
      state.available = state.available.filter(coupon => coupon.id !== action.payload.id);
    },
    updateCoupon(state, action) {
      const index = state.available.findIndex(coupon => coupon.id === action.payload.id);
      if (index !== -1) {
        state.available[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveCoupons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActiveCoupons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activeCoupons = action.payload;
      })
      .addCase(fetchActiveCoupons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addCoupon, viewCoupon, removeCoupon, updateCoupon } = couponSlice.actions;
export default couponSlice.reducer;
