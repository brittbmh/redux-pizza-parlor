import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';

//reducers


const storeInstance = createStore(
    combineReducers({

    }),
    applyMiddleware(logger),
);

ReactDOM.render(<App />, document.getElementById('root'));
