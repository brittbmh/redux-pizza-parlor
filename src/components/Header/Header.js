import React, { Component } from 'react';
import './Header.css';
import {connect}  from 'react-redux'; 

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <h1 className="App-title">Prime Pizza</h1>
                <p>Cart Total:</p>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(Header);