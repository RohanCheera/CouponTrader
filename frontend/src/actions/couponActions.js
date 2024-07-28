import {
    getAllCoupons,
    getUserCoupons,
    createCoupon,
    getAllActiveCoupons,
    getUserActiveCoupons,
    getUserExpiredCoupons,
    deleteCoupon,
    updateCoupon,
    usedCoupon,
  } from '../utils/api';
  
  // Action Types
  export const FETCH_COUPONS_SUCCESS = 'FETCH_COUPONS_SUCCESS';
  export const FETCH_USER_COUPONS_SUCCESS = 'FETCH_USER_COUPONS_SUCCESS';
  export const CREATE_COUPON_SUCCESS = 'CREATE_COUPON_SUCCESS';
  export const UPDATE_COUPON_SUCCESS = 'UPDATE_COUPON_SUCCESS';
  export const DELETE_COUPON_SUCCESS = 'DELETE_COUPON_SUCCESS';
  export const USE_COUPON_SUCCESS = 'USE_COUPON_SUCCESS';
  export const FETCH_ERROR = 'FETCH_ERROR';
  
  // Fetch All Coupons
  export const fetchCoupons = () => async (dispatch) => {
    try {
      const response = await getAllCoupons();
      dispatch({
        type: FETCH_COUPONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // Fetch User Coupons
  export const fetchUserCoupons = (userId) => async (dispatch) => {
    try {
      const response = await getUserCoupons(userId);
      dispatch({
        type: FETCH_USER_COUPONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // Create Coupon
  export const createNewCoupon = (couponData) => async (dispatch) => {
    try {
      const response = await createCoupon(couponData);
      dispatch({
        type: CREATE_COUPON_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // Update Coupon
  export const updateExistingCoupon = (couponId, couponData) => async (dispatch) => {
    try {
      const response = await updateCoupon(couponId, couponData);
      dispatch({
        type: UPDATE_COUPON_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // Delete Coupon
  export const deleteExistingCoupon = (couponId) => async (dispatch) => {
    try {
      await deleteCoupon(couponId);
      dispatch({
        type: DELETE_COUPON_SUCCESS,
        payload: couponId,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // Use Coupon
  export const useExistingCoupon = (couponId) => async (dispatch) => {
    try {
      const response = await usedCoupon(couponId);
      dispatch({
        type: USE_COUPON_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: error.response.data,
      });
    }
  };
  


// Fetch all active coupons
export const fetchActiveCoupons = () => async (dispatch) => {
  try {
    const response = await getAllActiveCoupons();
    dispatch({
      type: FETCH_COUPONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error.response.data,
    });
  }
};

// View coupon action (assuming you need this for opening a detailed view)
export const viewCoupon = (coupon) => ({
  type: 'VIEW_COUPON',
  payload: coupon,
});


