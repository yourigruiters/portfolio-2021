import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/containers/app';

import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './app/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
