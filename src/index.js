import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//reducers
const checkout = (state = [{price: 12.99}], action) => {
    if (action.type === 'SEND_CHECKOUT') {
        return [...state, action.payload]
    }
    else if (action.type === 'CLEAR_CART') {
        return []
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        checkout
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));