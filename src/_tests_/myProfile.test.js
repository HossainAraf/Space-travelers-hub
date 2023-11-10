import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../Components/MyProfile';

describe('MyProfile Component', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
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

  it('renders a message when no rocket is reserved', () => {
    const sampleRockets = [
      // Add sample rockets with reserved: false
    ];

    store = mockStore({
      missions: {
        missions: [],
      },
      rockets: {
        rockets: sampleRockets,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(getByText('No Rockets Reserved Yet.')).toBeInTheDocument();
  });

  it('renders reserved rockets when there are reserved rockets', () => {
    const sampleRockets = [
      // Add sample rockets with the "reserved" property set to true
    ];

    store = mockStore({
      missions: {
        missions: [],
      },
      rockets: {
        rockets: sampleRockets,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    sampleRockets.forEach((rocket) => {
      expect(getByText(rocket.name)).toBeInTheDocument();
    });
  });
});
