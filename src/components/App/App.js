import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Admin from './../Admin/Admin.js';
import OrderForm from '../OrderForm/OrderForm.js';
import Checkout from './../Checkout/Checkout.js';
import PizzaHome from './../PizzaHome/PizzaHome.js';
import Header from './../Header/Header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order">Order Form</Link>
              </li>
            </ul>
            <Route exact path="/" component={PizzaHome}/>
            <Route exact path="/order" component={OrderForm}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/admin" component={Admin}/>
          </div>
        </Router>
        {/* <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p> */}
      </div>
    );
  }
}

export default App;
