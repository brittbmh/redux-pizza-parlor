import React, { Component } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem.js';
import { connect } from 'react-redux';

// material-ui import statements
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class PizzaHome extends Component {

    constructor(props) {
        super(props);

        this.state={
            pizzaArray: [],
        }
    }

    // load the pizza data from the server
    componentDidMount = () => {
        this.getPizzaInfo();
    }

    // Get the pizza information from the pizza table on the database
    getPizzaInfo = () => {
        // send GET request to update the like value for an item clicked
        axios({
            method: 'GET',
            url: `/api/pizza`,
        }).then((response) => {
            // put the data in the local state array galleryItems
        this.setState({
            pizzaArray: response.data,
        })
        }).catch((error) => {
            // Console log and alert for error GET
            console.log(`Error in axios GET: ${error}`);
            alert(`Error getting pizza data.`);
        });
    } // end getPizzaInfo

    // after a pizza is selected send the person to order page
    sendToOrder = () => {
        if (this.checkArray()) {
            this.props.history.push('/order');
        } else {
            alert(`You have not selected a pizza!`);
        } // end if

    } // end sendToOrder

    checkArray = () => {
        console.log('in checkArray');
        for(let item of this.props.reduxStore.checkout) {
            if(item.id != null) {
                return true;
            } // end if
            return false;
        } // end for of
    } // end checkArray

    // function to display pizzas items on the DOM
    displayPizza = (pizzaArrayIn) => {

        // array for items to be returned when the function is called
        let displayArray = [];
    
        // loop through the array sent and add Jsx and click handlers to the data
        for( let i in pizzaArrayIn ) {
            // adds the pizzas to the display
            displayArray.push(<PizzaItem  key={pizzaArrayIn[i].id}
                                            pizzaId={pizzaArrayIn[i].id}
                                            pizzaName={pizzaArrayIn[i].name}
                                            description={pizzaArrayIn[i].description}
                                            price={pizzaArrayIn[i].price}
                                            imagePath={pizzaArrayIn[i].image_path}
                                            
                                            />);
        }
    
        return displayArray;
    
    }

    render() {
        return (
            <div>
                <Grid container spacing={24}>                
                    {this.displayPizza(this.state.pizzaArray)}
                </Grid>
                <br />
                <Button variant="contained" color="primary" onClick={this.sendToOrder}>Checkout</Button>
                    <br />
                    <br />
                    <br />
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});

export default connect(mapReduxStoreToProps)(PizzaHome);