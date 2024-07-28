import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCouponViewerOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCouponViewer(state) {
      state.isCouponViewerOpen = !state.isCouponViewerOpen;
    },
  },
});

export const { toggleCouponViewer } = uiSlice.actions;
export default uiSlice.reducer;
