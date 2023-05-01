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
import { BrowserRouter as Router, Route, Redirect, Switch }
  from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

const reducers = combineReducers({
  messages: messagesReducer,
  post: postReducer,
  channels: channelsReducer,
});

const middlewares = applyMiddleware(logger, reduxPromise);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
