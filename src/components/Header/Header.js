import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {

    addCart = () => {
        const order = this.props.reduxStore.checkout
        let totalPrice = 0;
        for (let pizza of order){
            totalPrice += parseFloat(pizza.price)
        }
        return totalPrice;
    }

    showTotal = () => {
        let showTotal;
        let totalPrice = this.addCart();
        if (totalPrice === 0) {
            showTotal = <br />
        } else {
            showTotal = <p>Cart Total: {totalPrice}</p>
        }
        return showTotal;
    }

    render() {
        

        
        return (
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                {this.showTotal()}
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Header);