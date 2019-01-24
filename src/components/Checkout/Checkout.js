import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

class Checkout extends Component {

    //checkout function to clear pizza cart
    pizzaCheckout = () => {
        const action = { type: 'CLEAR_CART' }
        this.props.dispatch(action);
        // this.props.[NAME].push('/')
    }


    render() {
        return (
            <div>
                <h2>Checkout Cart</h2>
                <PizzaItem key={pizzaArrayIn[i].id}
                           pizzaId={pizzaArrayIn[i].id}
                           pizzaName={pizzaArrayIn[i].name}
                           price={pizzaArrayIn[i].price} />

            
            
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Checkout);