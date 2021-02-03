import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import breweriesReducer from'./store'
import App from './components/App'

import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from "redux-thunk";

//why is the middleware replacing the initial state
const store = createStore(breweriesReducer,applyMiddleware(thunk,logger));

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector('#root')
);
