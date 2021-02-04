import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import { reducers } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
