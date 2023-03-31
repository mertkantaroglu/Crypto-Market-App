import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../component/Home';
import store from '../redux/store';

describe('Home Test', () => {
  test('to render homepage', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});
