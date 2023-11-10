import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Components/Missions';

const mockStore = configureStore([]);

describe('Missions Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 1, mission_name: 'Mission 1', reserved: false, description: 'Description 1',
          },
          {
            mission_id: 2, mission_name: 'Mission 2', reserved: true, description: 'Description 2',
          },
        ],
      },
    });
  });

  it('renders missions with correct details', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText(/Mission 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Join Mission/i)).toBeInTheDocument();

    expect(screen.getByText(/Mission 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Description 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Leave Mission/i)).toBeInTheDocument();
  });

  it('clicking Join Mission dispatches reserveMission action', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Join Mission/i));

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'missions/reserveMission', payload: 1 });
  });

  it('clicking Leave Mission dispatches cancelMission action', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Leave Mission/i));

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'missions/cancelMission', payload: 2 });
  });
});
