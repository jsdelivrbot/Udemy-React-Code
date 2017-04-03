import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory} from 'react-router';
//router decides what to render.
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

//all actions will now flow through promise library and
//helps in unravelling the response
const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}  routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
