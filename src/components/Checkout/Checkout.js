import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

    pizzaCheckout = () => {
        const action = { type: 'CLEAR_CART' }
        this.props.dispatch(action);
        // this.props.[NAME].push('/')
    }


    render() {
        return (
            <div>
                <h2>Checkout Cart</h2>
            
            
            
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Checkout);