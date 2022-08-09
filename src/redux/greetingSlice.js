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
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default greetingSlice.reducer;
