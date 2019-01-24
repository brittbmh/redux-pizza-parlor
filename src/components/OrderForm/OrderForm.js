import React, {Component} from 'react';
import { connect } from 'react-redux';

class OrderForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerToAdd: {
                name: '',
                address: '',
                city: '',
                zip: '',

            }
        }
    }
    // method changes the state as user types into input field
    nameChange = (event) => {
        this.setState({
            customerToAdd: {
                name: event.target.value
            },
        });
    }
    addressChange = (event) => {
        this.setState({
            customerToAdd: {
                address: event.target.value
            },
        });
    }
    cityChange = (event) => {
        this.setState({
            customerToAdd: {
                city: event.target.value
            },
        });
    }
    zipChange = (event) => {
        this.setState({
            customerToAdd: {
                zip: event.target.value
            },
        });
    }
    // addCustomer sends customer information from state and dispatches to reduxStore
    addCustomer = (event) => {
        event.preventDefault();
        const customerInfo = this.state.customerToAdd
        const action = { type: 'ADD_NEW_CUSTOMER', payload: customerInfo };
        this.props.dispatch(action);
    }
    render(){
        return(
            //input fields for each customer information item
            <form on Submit={this.addCustomer}>
                <input onChange={this.nameChange}type="text" placeholder="Name" />
                <input onChange={this.addressChange}type="text" placeholder="Street Address" />
                <input onChange={this.cityChange}type="text" placeholder="City" />
                <input onChange={this.zipChange}type="number" placeholder="Zip Code" />

                <input type="radio"  value="Pick-up" /> <br />
                <input type="radio"  value="Delivery" /> <br />
                <input type="submit" value="Next" />

            </form>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(OrderForm);