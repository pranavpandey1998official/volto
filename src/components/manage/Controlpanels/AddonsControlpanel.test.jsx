import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import AddonsControlpanel from './AddonsControlpanel';

const mockStore = configureStore();

jest.mock('react-portal', () => ({
  Portal: jest.fn(() => <div id="Portal" />),
}));

describe('AddonsControlpanel', () => {
  it('renders a user control component', () => {
    const store = mockStore({
      roles: { roles: [] },
      users: { users: [] },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <AddonsControlpanel location={{ pathname: '/blog' }} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
