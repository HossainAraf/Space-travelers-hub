import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Rockets from '../Components/Rockets';

test('Rockets component renders without errors', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
});
