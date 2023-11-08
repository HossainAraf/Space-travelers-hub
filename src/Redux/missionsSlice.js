import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    fetchMissionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMissionsSuccess: (state, action) => {
      state.missions = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMissionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reserveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = true;
      }
    },
    cancelMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
});

export const {
  fetchMissionsStart,
  fetchMissionsSuccess,
  fetchMissionsFailure,
  reserveMission,
  cancelMission,
} = missionsSlice.actions;

export const fetchMissions = () => async (dispatch) => {
  try {
    dispatch(fetchMissionsStart());

    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = response.data;

    dispatch(fetchMissionsSuccess(missions));
  } catch (error) {
    dispatch(fetchMissionsFailure(error.message));
  }
};

export default missionsSlice.reducer;
