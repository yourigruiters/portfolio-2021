import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/containers/app';

import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './app/redux/store';

import Favicon from 'react-favicon';
import FavIcon from './app/media/images/favicon.png';

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={FavIcon} />
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
