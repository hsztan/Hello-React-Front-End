/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/v1/greetings');
      return data;
    } catch (error) {
      return error;
    }
  },
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
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { actions } = greetingSlice;
export default greetingSlice.reducer;
