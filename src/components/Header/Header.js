import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        let totalPrice = 0;
        function addCart(pizza){
            return totalPrice += pizza.price;
        }
        const cartTotal = this.props.reduxStore.checkout.map(addCart);

        let showTotal;
        if (totalPrice === 0) {
            showTotal = <br />
        } else {
            showTotal = <p>Cart Total: {cartTotal}</p>
        }

        
        return (
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                {showTotal}
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Header);