import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchUser} from './actions/user_actions';

import {updateUser} from './actions/user_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchUser = fetchUser;
  window.store=store;
  window.updateUser = updateUser;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
