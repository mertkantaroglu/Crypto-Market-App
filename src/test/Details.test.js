import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../component/Details';
import store from '../redux/store';

describe('Details Test', () => {
  test('to render infividual coins', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});
