// src/actions/authActions.js
import { registerUser, loginUser, updateUserProfile,logoutUser } from '../utils/api';


// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    const response = await registerUser(userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};

// Login User
export const login = (loginData) => async (dispatch) => {
  console.log("auth action login:",loginData);
  try {
    const response = await loginUser(loginData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};

// Update User Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    const response = await updateUserProfile(userData);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};




// Logout User
export const logout = () => async (dispatch) => {
  try {
    await logoutUser(); // Ensure you have this function in api.js
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
};



