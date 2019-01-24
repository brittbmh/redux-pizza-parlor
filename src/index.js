import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducers
const checkout = ( state = [], action) => {
    if (action.type === 'SEND_CART') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
    checkout,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
