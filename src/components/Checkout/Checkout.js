import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {


    render() {
        return (
            <div>Test Placeholder</div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(Checkout);