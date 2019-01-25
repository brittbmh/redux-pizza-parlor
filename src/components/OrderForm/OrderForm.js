import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class OrderForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerToAdd: {
                customer_name: '',
                street_address: '',
                city: '',   
                zip: '',
                type: '',

            }
        }
    }
    // method changes the state as user types into input field
    nameChange = (event) => {
        this.setState({
            customerToAdd: {
                ...this.state.customerToAdd,
                customer_name: event.target.value
            },
        });
    }
    addressChange = (event) => {
        this.setState({
            customerToAdd: {
                ...this.state.customerToAdd,
                street_address: event.target.value
            },
        });
    }
    cityChange = (event) => {
        this.setState({
            customerToAdd: {
                ...this.state.customerToAdd,
                city: event.target.value
            },
        });
    }
    zipChange = (event) => {
        this.setState({
            customerToAdd: {
                ...this.state.customerToAdd,
                zip: event.target.value
            },
        });
    }
    // on click of delivery or pick-up will set the delivery type in state
    showType = (event) =>{
        if( event.target.value === 'Pick-up'){
            this.setState({
                customerToAdd: {
                    ...this.state.customerToAdd,
                    type: event.target.value
                },
            });
        } else if( event.target.value === 'Delivery'){
            this.setState({
                customerToAdd: {
                    ...this.state.customerToAdd,
                    type: event.target.value
                },
            });
        }
    }
    // addCustomer sends customer information from state and dispatches to reduxStore
    addCustomer = (event) => {
        event.preventDefault();
        const customerInfo = this.state.customerToAdd
        const action = { type: 'ADD_NEW_CUSTOMER', payload: customerInfo };
        this.props.dispatch(action);
        this.props.history.push('/checkout');
    }
    render(){
        return(
            //input fields for each customer information item
            <form onSubmit={this.addCustomer}>
                <TextField
                    required
                    id="outlined-name"
                    label="Name"
                    onChange={this.nameChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-address"
                    label="Address"
                    onChange={this.addressChange}
                    margin="normal"
                    variant="outlined"
                /><TextField
                    required
                    id="outlined-city"
                    label="City"
                    onChange={this.cityChange}
                    margin="normal"
                    variant="outlined"
                /><TextField
                    required
                    id="outlined-zip"
                    label="Zip Code"
                    onChange={this.zipChange}
                    margin="normal"
                    variant="outlined"
                />
                <br />

                <input required onChange={this.showType} type="radio" name="type" value="Pick-up" /> Pick-up
                <input required onChange={this.showType} type="radio" name="type" value="Delivery" />  Delivery
                <br />
                <br />
                <Button type="submit" variant="contained" color="primary" >Next</Button>



            </form>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(OrderForm);