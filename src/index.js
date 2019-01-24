import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';



//reducers
const checkout = ( state = pizza, action) => {
    if (action.type === 'SEND_CART') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

const checkCustomer = (state = [], action) => {
    if (action.type === 'ADD_NEW_CUSTOMER'){
        return [...state, action.payload]
    }
    return state;
}

 

const storeInstance = createStore(
    combineReducers({
    checkout,
    checkCustomer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
