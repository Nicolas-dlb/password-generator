import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../redux/store';

describe('App', () => {
  it('Renders app properly', () => {
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });
});
