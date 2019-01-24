import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const pizza = [
    { name: 'Tomato Soup', price: '12.99'},
    { name: 'Pepperoni', price: '14.99' },
    { name: 'Bad Date', price: '12.99' },
];


//reducers
const checkout = ( state = pizza, action) => {
    if (action.type === 'SEND_CART') {
        return [...state, action.payload];
    } else if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
    checkout
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
