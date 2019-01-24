import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        let cartTotal;
        if (this.props.reduxStore.Reducer === 0) {
            cartTotal = <br />
        } else {
            cartTotal = <p>Cart Total:</p>
        }
        return (
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                {cartTotal}
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Header);