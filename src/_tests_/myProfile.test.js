import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../Components/MyProfile';

describe('MyProfile Component', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    // Create a mock Redux store
    store = mockStore({
      missions: {
        missions: [
          // Provide sample missions data here for testing
        ],
      },
      rockets: {
        rockets: [
          // Provide sample rockets data here for testing
        ],
      },
    });
  });

  it('renders no missions joined message when there are no joined missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('No missions joined yet.')).toBeInTheDocument();
  });

  it('renders joined missions when there are joined missions', () => {
    const sampleMissions = [
      // Add sample missions with the "reserved" property set to true
    ];

    store = mockStore({
      missions: {
        missions: sampleMissions,
      },
      rockets: {
        rockets: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    sampleMissions.forEach((mission) => {
      expect(getByText(mission.mission_name)).toBeInTheDocument();
    });
  });
});
