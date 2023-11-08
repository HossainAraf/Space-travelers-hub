//IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API
const APIurl = 'https://api.spacexdata.com/v4/rockets';

// ASYNC ACTIONS
const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(APIurl);
  const data = await response.json();
  return data;
});