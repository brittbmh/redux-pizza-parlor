import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import Checkout from './components/Checkout/Checkout';
=======
import PizzaHome from './../PizzaHome/PizzaHome.js';
>>>>>>> 32a55d3547eab02301e3809c67709dad61a60ad6
=======
import Checkout from './components/Checkout/Checkout';
import PizzaHome from './../PizzaHome/PizzaHome.js';
>>>>>>> master

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
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* <Link to="/order">Order Form</Link> */}
              </li>
            </ul>
            <Route exact path="/" component={PizzaHome}/>
            {/* <Route exact path="/order" component={OrderForm}/>
            <Route exact path="/checkout" component={Checkout}/>
            <Route exact path="/admin" component={Admin}/> */}
          </div>
        </Router>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
      </div>
    );
  }
}

export default App;
