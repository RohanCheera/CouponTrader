import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createCoupon = createAsyncThunk('coupons/createCoupon', async (couponData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token; // Adjust this line to how you store the token

    console.log("while sending api request :", couponData);

    const response = await axios.post('http://localhost:5000/api/coupons', couponData, {
      headers: {
        Authorization: `Bearer ${token}` // Assuming you're using Bearer token authentication
      }
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to create coupon');
  }
});

export const fetchActiveCoupons = createAsyncThunk('coupons/fetchActiveCoupons', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token; // Adjust this line to how you store the token

    const response = await axios.get('http://localhost:5000/api/coupons/my-active', {
      headers: {
        Authorization: `Bearer ${token}` // Assuming you're using Bearer token authentication
      }
    });
    console.log("fetched data is :",response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch active coupons');
  }
});