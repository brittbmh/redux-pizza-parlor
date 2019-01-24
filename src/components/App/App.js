import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Admin from './../Admin/Admin.js';
import OrderForm from '../OrderForm/OrderForm.js';
import Checkout from './../Checkout/Checkout';
// import PizzaHome from './../PizzaHome/PizzaHome.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <Router>
          <div>
            {/* I changed it from a list to a div of its own to get rid of the list Item dots, TJ */}
            <div> 
                <Link to="/">Home</Link>
              <br/>
                <Link to="/order">Order Form</Link>
            </div>
            {/* <Route exact path="/" component={PizzaHome}/> */}
            <Route exact path="/order" component={OrderForm}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
        </Router>
        <img src="images/pizza_photo.png" alt="Pizza"/>
        <p>Pizza is great.</p>
      </div>
    );
  }
}

export default App;
