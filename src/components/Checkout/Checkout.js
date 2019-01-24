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
        
        let checkoutTotal = 0;
        for (let pizza of this.props.reduxStore.checkout) {
            checkoutTotal += pizza.price;
        }

        return (
            <div>
                <h2>Checkout Cart</h2>
                {JSON.stringify(this.props.reduxStore.checkout)}
                {/* <PizzaItem key={this.props.pizzaArrayIn[i].id}
                           pizzaId={this.props.pizzaArrayIn[i].id}
                           pizzaName={this.props.pizzaArrayIn[i].name}
                           price={this.props.pizzaArrayIn[i].price} /> */}
                <h2>{checkoutTotal}</h2>
            
            
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Checkout);