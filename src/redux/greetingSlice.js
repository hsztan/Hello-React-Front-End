import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const { data } = await axios.get('/api/greeting');
    return data;
  }
);

const initialState = {
  greeting: '',
  isLoading: false,
  isError: false,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
});

export default greetingSlice.reducer;
