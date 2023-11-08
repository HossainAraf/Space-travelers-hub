import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';
import rocketReducer from './rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rocket: rocketReducer,
  },
});

export default store;
