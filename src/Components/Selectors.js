import { createSelector } from 'reselect';

// Input selector (returns the array of rockets)
const selectRockets = (state) => state.rockets.rockets;

// Memoized selector that derives the reserved rockets
const selectReservedRockets = createSelector(
  [selectRockets],
  (rockets) => rockets.filter((rocket) => rocket.reserved === true),
);

export default selectReservedRockets;
