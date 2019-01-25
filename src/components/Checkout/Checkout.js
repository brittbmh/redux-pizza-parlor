import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PizzaItem from '../PizzaItem/PizzaItem';
import './Checkout.css';
import axios from 'axios';

class Checkout extends Component {

    //checkout function to clear pizza cart
    pizzaCheckout = () => {
        const action = { type: 'CLEAR_CART' }
        this.props.dispatch(action);
        // this.props.[NAME].push('/')
        axios.post('/api/order', {

        })
    }
    


    render() {
        
        let checkoutTotal = 0;
        for (let pizza of this.props.reduxStore.checkout) {
            checkoutTotal += parseFloat(pizza.price);
        }





        return (
            <div>
                <h2>Checkout Cart</h2>
                <div>
                    <h3>Customer Information</h3>
                    {JSON.stringify(this.props.reduxStore.checkCustomer)}
                    <div>
                    {this.props.reduxStore.checkCustomer.map((customer) => {
                        return (
                        <ul>
                            <li>Name: {customer.name}</li>
                            <li>Address: {customer.address}</li>
                            <li>City: {customer.city}</li>
                            <li>Zip Code: {customer.zip}</li>
                            <li>Delivery or Pickup: {customer.type}</li>
                        </ul>
                        )
                    })}
                    </div>
                </div>
                {JSON.stringify(this.props.reduxStore.checkout)}
            <table className="checkout-table">
                <tbody>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
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