import React, {Component} from 'react';
import { connect } from 'react-redux';

class OrderForm extends Component {
    render(){
        return(
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Street Address" />
                <input type="text" placeholder="City" />
                <input type="number" placeholder="Zip Code" />

                <input type="radio"  value="Pick-up" /> <br />
                <input type="radio"  value="Delivery" /> <br />
                <input type="submit" value="Submit" />

            </form>

        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(OrderForm);