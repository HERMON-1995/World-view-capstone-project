import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import Country from '../components/Country';
import store from '../redux/Store';
import '@testing-library/jest-dom/extend-expect';

window.scrollTo = jest.fn();

describe('Details Component', () => {
  it('should render the details correctly', async () => {
    window.scrollTo.mockClear();
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Country />
        </Provider>
        ,
      </BrowserRouter>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
