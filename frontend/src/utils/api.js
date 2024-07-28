// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Auth API calls
export const registerUser = (userData) => axios.post(`${API_URL}/users/`, userData);
export const loginUser = (loginData) => axios.post(`${API_URL}/users/login`, loginData);
export const updateUserProfile = (userData) => axios.post(`${API_URL}/users/profile`, userData);

// Coupon API calls
export const getAllCoupons = () => axios.get(`${API_URL}/coupons/`);
export const getUserCoupons = (userId) => axios.get(`${API_URL}/coupons/${userId}`);
export const createCoupon = (couponData) => axios.post(`${API_URL}/coupons/`, couponData);
export const getAllActiveCoupons = () => axios.get(`${API_URL}/coupons/active`);
export const getUserActiveCoupons = () => axios.get(`${API_URL}/coupons/my-active`);
export const getUserExpiredCoupons = () => axios.get(`${API_URL}/coupons/inactive`);
export const deleteCoupon = (couponId) => axios.delete(`${API_URL}/coupons/${couponId}`);
export const updateCoupon = (couponId, couponData) => axios.put(`${API_URL}/coupons/${couponId}`, couponData);
export const usedCoupon = (couponId) => axios.post(`${API_URL}/coupons/${couponId}/use`);
export const logoutUser = async () => {
    return axios.post(`${API_URL}/users/logout`);
  };
  