import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PizzaItem from '../PizzaItem/PizzaItem';
import './Checkout.css';

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
            checkoutTotal += parseInt(pizza.price);
        }





        return (
            <div>
                <h2>Checkout Cart</h2>
                {/* <OrderForm /> */}
                {JSON.stringify(this.props.reduxStore.checkout)}
            <table className="checkout-table">
                <tbody>
                    <th>Name</th>
                    <th>Price</th>
                {this.props.reduxStore.checkout.map((pizza) => {
                    return (
                        <tr>
                            <td>{pizza.name}</td><td>{pizza.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
                <h2 className="total-checkout">Total: {checkoutTotal}</h2> 
                <button onClick={this.pizzaCheckout} className="checkout-button">Checkout</button>
                        
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Checkout);