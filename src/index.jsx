// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import postReducer from './reducers/post_reducer.js'
import messagesReducer from './reducers/message_reducer.js'
import channelsReducer from './reducers/channels_reducer.js'
import selectedChannelReducer from './reducers/selected_channel_reducer.js'
// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  post: postReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer
});

const preloadedState = {
  selectedChannel: null
};

const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, preloadedState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
