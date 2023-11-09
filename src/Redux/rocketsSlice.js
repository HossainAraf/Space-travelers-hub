import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios
  .get('https://api.spacexdata.com/v4/rockets')
  .then((response) => response.data));

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelRocketReservation: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, cancelRocketReservation } = rocketSlice.actions;
