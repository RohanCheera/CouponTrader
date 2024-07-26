import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Upload from '../utils/Upload';

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const imageUrl = userData.image ? await Upload(userData.image) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    const response = await axios.post('http://localhost:5000/api/users/', { ...userData, pic: imageUrl });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Registration failed');
  }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
    const data={"email":email,"password":password};
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', data);
      const { token, name, email, pic } = response.data;
      localStorage.setItem('token', token);
      return { token, name, email, pic };
    } catch (error) {
      console.error('Login Error:', error); // Ensure correct logging
      const message = error.response?.data?.message || 'Login failed';
      return thunkAPI.rejectWithValue(message);
    }
  });
  
